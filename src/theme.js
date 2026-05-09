/**
 * ─────────────────────────────────────────────
 *  SITE-WIDE THEME  —  Deep Obsidian + Violet
 *  Change values here to retheme the entire site.
 * ─────────────────────────────────────────────
 *
 * PRIMARY   : #8B5CF6  (violet-500)
 * SECONDARY : #6366F1  (indigo-500)
 * ACCENT    : #7C3AED  (violet-700 — deeper glow)
 * BG BASE   : #050508  →  #0C0C1D  →  #0F0A1E
 * SURFACE   : #0F0A1E / rgba(15,10,30,0.75)
 * TEXT HI   : #FFFFFF
 * TEXT MID  : #E2E8F0
 * TEXT LOW  : #94A3B8
 * BORDER    : rgba(139,92,246,0.25)
 */

export const theme = {
    // ── Backgrounds ──────────────────────────────
    bg: {
        page:    'linear-gradient(135deg, #050508 0%, #0C0C1D 40%, #0F0A1E 70%, #080510 100%)',
        surface: 'rgba(15, 10, 30, 0.75)',
        card:    'rgba(15, 10, 30, 0.85)',
        nav:     'rgba(5, 5, 8, 0.92)',
        footer:  '#050508',
        input:   'rgba(10, 8, 20, 0.8)',
    },

    // ── Accent Colors ─────────────────────────────
    color: {
        primary:   '#8B5CF6',   // violet-500
        secondary: '#6366F1',   // indigo-500
        accent:    '#7C3AED',   // violet-700
        primary2:  '#A78BFA',   // violet-400 (lighter)
        muted:     '#C4B5FD',   // violet-300 (text on dark)
    },

    // ── Gradients ─────────────────────────────────
    gradient: {
        primary:  'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
        text:     'linear-gradient(135deg, #FFFFFF 0%, #C4B5FD 40%, #A78BFA 100%)',
        badge:    'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))',
        glow1:    'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        glow2:    'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        card:     'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(99,102,241,0.08))',
        cardHover:'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.14))',
    },

    // ── Borders ───────────────────────────────────
    border: {
        default: 'rgba(139, 92, 246, 0.25)',
        subtle:  'rgba(139, 92, 246, 0.15)',
        strong:  'rgba(139, 92, 246, 0.5)',
        hover:   'rgba(139, 92, 246, 0.7)',
    },

    // ── Text ──────────────────────────────────────
    text: {
        high:    '#FFFFFF',
        mid:     '#E2E8F0',
        low:     '#94A3B8',
        primary: '#C4B5FD',   // violet-300
        accent:  '#A78BFA',   // violet-400
    },

    // ── Shadows / Glows ───────────────────────────
    shadow: {
        button:     '0 10px 30px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        buttonHover:'0 20px 50px rgba(124,58,237,0.6)',
        card:       '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        icon:       '0 0 25px rgba(124,58,237,0.35)',
        image:      '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.25)',
    },

    // ── Scrollbar ─────────────────────────────────
    scrollbar: {
        track: '#050508',
        thumb: '#7C3AED',
        thumbHover: '#6366F1',
    },

    // ── Selection highlight ───────────────────────
    selection: {
        bg:   '#7C3AED',
        text: '#FFFFFF',
    },
};

export default theme;
