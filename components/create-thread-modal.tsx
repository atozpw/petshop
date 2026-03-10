'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, AlertCircle } from "lucide-react"
import { FORUM_CATEGORIES } from "@/lib/forum-data"

interface CreateThreadModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (threadData: {
    title: string
    category: string
    content: string
    author: string
    tags?: string[]
  }) => void
}

export function CreateThreadModal({ isOpen, onClose, onSubmit }: CreateThreadModalProps) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("general-chat")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!author.trim()) {
      newErrors.author = "Nama penulis wajib diisi"
    } else if (author.length < 3) {
      newErrors.author = "Nama minimal 3 karakter"
    }

    if (!title.trim()) {
      newErrors.title = "Judul thread wajib diisi"
    } else if (title.length < 5) {
      newErrors.title = "Judul minimal 5 karakter"
    }

    if (!content.trim()) {
      newErrors.content = "Konten thread wajib diisi"
    } else if (content.length < 20) {
      newErrors.content = "Konten minimal 20 karakter"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
      .slice(0, 5)

    onSubmit({
      author: author.trim(),
      title: title.trim(),
      category,
      content: content.trim(),
      tags: tagsArray.length > 0 ? tagsArray : undefined,
    })

    // Reset form
    setTitle("")
    setAuthor("")
    setCategory("general-chat")
    setContent("")
    setTags("")
    setErrors({})
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Buat Thread Baru</DialogTitle>
          <DialogDescription>Bagikan cerita, pertanyaan, atau tips Anda dengan komunitas JJ Pet House</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Author Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Nama Anda</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.author ? "border-red-500" : "border-border"
              }`}
            />
            {errors.author && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.author}</p>}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Judul Thread</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Tips merawat kucing panjang rambut"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.title ? "border-red-500" : "border-border"
              }`}
            />
            {errors.title && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.title}</p>}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {FORUM_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Konten</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis cerita, pertanyaan, atau tips Anda di sini... (minimal 20 karakter)"
              rows={8}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                errors.content ? "border-red-500" : "border-border"
              }`}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">{content.length} karakter</p>
              {errors.content && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.content}</p>}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Tags (Opsional)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Pisahkan dengan koma (contoh: anjing, grooming, tips)"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted-foreground">Maksimal 5 tags</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t border-border">
            <Button type="button" variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled>
              Buat Thread
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
