import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import CustomCursor from '../Components/CustomCursor';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const emptyForm = { name: '', tag: '', desc: '', stack: '', live: '', code: '' };

const swalDark = {
    background: '#06070a',
    color: '#e7eaf0',
    confirmButtonColor: '#4fd1ff',
    cancelButtonColor: 'rgba(255,255,255,0.1)',
};

const Admin = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);

    const fetchProjects = async () => {
        try {
            const res = await fetch(`${API_URL}/projects`);
            const data = await res.json();
            setProjects(data);
        } catch {
            Swal.fire({ ...swalDark, icon: 'error', title: 'Server error', text: 'Could not load projects. Is the backend running?' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const openAdd = () => {
        setEditingId(null);
        setForm(emptyForm);
        setModalOpen(true);
    };

    const openEdit = (p) => {
        setEditingId(p._id);
        setForm({
            name: p.name || '',
            tag: p.tag || '',
            desc: p.desc || '',
            stack: (p.stack || []).join(', '),
            live: p.live || '',
            code: p.code || '',
        });
        setModalOpen(true);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        const payload = {
            name: form.name.trim(),
            tag: form.tag.trim(),
            desc: form.desc.trim(),
            stack: form.stack.split(',').map((s) => s.trim()).filter(Boolean),
            live: form.live.trim(),
            code: form.code.trim(),
        };
        try {
            const res = await fetch(
                editingId ? `${API_URL}/projects/${editingId}` : `${API_URL}/projects`,
                {
                    method: editingId ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );
            if (!res.ok) throw new Error();
            setModalOpen(false);
            await fetchProjects();
            Swal.fire({
                ...swalDark,
                icon: 'success',
                title: editingId ? 'Project updated' : 'Project added',
                timer: 1500,
                showConfirmButton: false,
            });
        } catch {
            Swal.fire({ ...swalDark, icon: 'error', title: 'Failed', text: 'Something went wrong while saving.' });
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (p) => {
        const result = await Swal.fire({
            ...swalDark,
            icon: 'warning',
            title: 'Delete project?',
            text: `"${p.name}" will be permanently removed.`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#ef4444',
        });
        if (!result.isConfirmed) return;
        try {
            const res = await fetch(`${API_URL}/projects/${p._id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error();
            setProjects(projects.filter((x) => x._id !== p._id));
            Swal.fire({ ...swalDark, icon: 'success', title: 'Deleted', timer: 1200, showConfirmButton: false });
        } catch {
            Swal.fire({ ...swalDark, icon: 'error', title: 'Failed', text: 'Could not delete the project.' });
        }
    };

    const inputClass =
        'w-full bg-white/5 border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors';

    return (
        <div className="relative min-h-screen bg-black bg-glow">
            <Helmet>
                <title>Admin — Projects</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <CustomCursor />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Link
                                to="/"
                                className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
                            >
                                <ArrowLeft size={18} />
                            </Link>
                            <span className="font-mono text-xs text-[var(--accent)]">ADMIN</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-white">Manage projects</h1>
                    </div>
                    <button
                        onClick={openAdd}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-[var(--accent)] transition-colors self-start sm:self-auto"
                    >
                        <Plus size={16} /> Add project
                    </button>
                </div>

                {/* List */}
                {loading ? (
                    <div className="flex items-center justify-center py-24 text-[var(--text-dim)]">
                        <Loader2 className="animate-spin mr-3" size={20} /> Loading projects…
                    </div>
                ) : projects.length === 0 ? (
                    <div className="panel rounded-2xl p-12 text-center text-[var(--text-dim)] border border-[var(--border)]">
                        No projects yet. Click <span className="text-white">Add project</span> to create one.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {projects.map((p, i) => (
                            <motion.div
                                key={p._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group panel rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                                            {p.tag && (
                                                <span className="font-mono text-[10px] tracking-widest text-[var(--text-dim)] uppercase border border-[var(--border)] rounded-full px-2 py-0.5">
                                                    {p.tag}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white truncate">{p.name}</h3>
                                        <p className="mt-1 text-sm text-[var(--text-dim)] line-clamp-2">{p.desc}</p>
                                        {p.stack?.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {p.stack.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-[var(--border)] text-[var(--text-dim)]"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        <button
                                            onClick={() => openEdit(p)}
                                            className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors"
                                            title="Edit"
                                        >
                                            <Pencil size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(p)}
                                            className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-dim)] hover:text-red-400 hover:border-red-400/50 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add / Edit modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={() => setModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-semibold text-white">
                                    {editingId ? 'Edit project' : 'Add project'}
                                </h2>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="text-[var(--text-dim)] hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                        Name *
                                    </label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nexus Commerce"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                        Tag
                                    </label>
                                    <input
                                        name="tag"
                                        value={form.tag}
                                        onChange={handleChange}
                                        placeholder="Full Stack"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                        Description
                                    </label>
                                    <textarea
                                        name="desc"
                                        value={form.desc}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="A MERN e-commerce platform with…"
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                        Stack <span className="normal-case">(comma separated)</span>
                                    </label>
                                    <input
                                        name="stack"
                                        value={form.stack}
                                        onChange={handleChange}
                                        placeholder="React, Node, MongoDB"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                            Live URL
                                        </label>
                                        <input
                                            name="live"
                                            value={form.live}
                                            onChange={handleChange}
                                            placeholder="https://…"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-mono text-xs text-[var(--text-dim)] mb-1.5 uppercase tracking-wider">
                                            Code URL
                                        </label>
                                        <input
                                            name="code"
                                            value={form.code}
                                            onChange={handleChange}
                                            placeholder="https://github.com/…"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-[var(--accent)] transition-colors disabled:opacity-50"
                                    >
                                        {saving && <Loader2 className="animate-spin" size={16} />}
                                        {editingId ? 'Save changes' : 'Add project'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        className="px-5 py-2.5 rounded-full border border-[var(--border)] text-white text-sm font-medium hover:border-[var(--accent)] transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Admin;
