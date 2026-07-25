"use client";

import { useEffect, useRef } from "react";
import { guideSteps, type GuideView } from "../help-content";

type OnboardingGuideProps = {
  open: boolean;
  step: number;
  onStepChange: (step: number) => void;
  onViewChange: (view: GuideView) => void;
  onDismiss: () => void;
  onComplete: () => void;
};

function visibleTarget(selector?: string) {
  if (!selector) return null;
  return Array.from(document.querySelectorAll<HTMLElement>(selector)).find((element) => {
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
  }) ?? null;
}

export default function OnboardingGuide({
  open,
  step,
  onStepChange,
  onViewChange,
  onDismiss,
  onComplete,
}: OnboardingGuideProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const current = guideSteps[step] ?? guideSteps[0];
  const isLast = step === guideSteps.length - 1;

  useEffect(() => {
    if (!open) return;
    onViewChange(current.view);
    const timeout = window.setTimeout(() => {
      const target = visibleTarget(current.target);
      target?.classList.add("guide-target-active");
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
      titleRef.current?.focus();
    }, 90);
    return () => {
      window.clearTimeout(timeout);
      document.querySelectorAll(".guide-target-active").forEach((element) => element.classList.remove("guide-target-active"));
    };
  }, [current.target, current.view, onViewChange, open, step]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onDismiss, open]);

  if (!open) return null;

  return (
    <div className={`guide-overlay ${step === 0 ? "welcome" : "guided"}`} role="presentation">
      <div className="guide-card" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="guide-title" aria-describedby="guide-description">
        <div className="guide-card-topline">
          <span>{current.eyebrow}</span>
          <button className="guide-close" onClick={onDismiss} aria-label="关闭新手教程">×</button>
        </div>
        <div className="guide-progress" aria-label={`教程进度 ${step + 1} / ${guideSteps.length}`}>
          {guideSteps.map((item, index) => (
            <button
              key={item.title}
              className={index === step ? "active" : index < step ? "complete" : ""}
              onClick={() => onStepChange(index)}
              aria-label={`前往第 ${index + 1} 步`}
              aria-current={index === step ? "step" : undefined}
            />
          ))}
          <b>{step + 1} / {guideSteps.length}</b>
        </div>
        <h2 id="guide-title" ref={titleRef} tabIndex={-1}>{current.title}</h2>
        <p id="guide-description">{current.description}</p>
        <div className="guide-tip"><span aria-hidden="true">i</span>{current.detail}</div>
        <div className="guide-actions">
          <button className="guide-skip" onClick={onDismiss}>跳过指引</button>
          <div>
            {step > 0 && <button onClick={() => onStepChange(step - 1)}>上一步</button>}
            <button className="primary" onClick={() => isLast ? onComplete() : onStepChange(step + 1)}>
              {isLast ? "完成并开始配置" : step === 0 ? "开始 1 分钟指引" : "下一步"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
