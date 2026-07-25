"use client";

import { useEffect, useRef } from "react";
import { helpSections, shortcuts } from "../help-content";

type HelpDrawerProps = {
  open: boolean;
  onClose: () => void;
  onReplay: () => void;
};

export default function HelpDrawer({ open, onClose, onReplay }: HelpDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    titleRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
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
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="help-overlay" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <aside className="help-drawer" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="help-title">
        <header>
          <div>
            <span>RIFT//LAB 使用指南</span>
            <h2 id="help-title" ref={titleRef} tabIndex={-1}>从第一套构筑开始</h2>
          </div>
          <button onClick={onClose} aria-label="关闭使用帮助">×</button>
        </header>
        <button className="replay-guide" onClick={onReplay}>
          <span aria-hidden="true">▶</span>
          <span><strong>播放 1 分钟新手指引</strong><small>跟随 6 个步骤认识完整工作台</small></span>
          <b aria-hidden="true">→</b>
        </button>
        <div className="help-sections">
          {helpSections.map((section, index) => (
            <details key={section.title} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</summary>
              <p>{section.body}</p>
            </details>
          ))}
        </div>
        <section className="shortcut-section" aria-labelledby="shortcut-title">
          <h3 id="shortcut-title">键盘快捷键</h3>
          <div>
            {shortcuts.map(([key, label]) => <p key={key}><kbd>{key}</kbd><span>{label}</span></p>)}
          </div>
        </section>
        <footer>
          <span>构筑保存在当前浏览器</span>
          <span>无需登录即可使用与分享</span>
        </footer>
      </aside>
    </div>
  );
}
