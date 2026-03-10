'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FORUM_THREADS, FORUM_CATEGORIES } from "@/lib/forum-data"
import { Heart, MessageCircle, Eye, Share2, ArrowLeft, User, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ThreadDetailPage() {
  const params = useParams()
  const threadId = params.threadId as string

  const thread = FORUM_THREADS.find((t) => t.id === threadId)
  const category = FORUM_CATEGORIES.find((c) => c.id === thread?.category)

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(thread?.likes || 0)
  const [replyText, setReplyText] = useState("")
  const [replies, setReplies] = useState([
    {
      id: "1",
      author: "Ani Wijaya",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
      content:
        "Tips yang sangat membantu! Saya sudah mencoba dan hasil grooming anjing saya jauh lebih baik sekarang. Terima kasih sudah berbagi!",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      likes: 45,
      isAuthor: false,
    },
    {
      id: "2",
      author: "Budi Santoso",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=BudiSantoso",
      content: "Wah, ini cara yang sempurna! Saya juga punya pengalaman serupa dengan pet grooming. Sudah menjadi pelanggan setia JJ Pet House!",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      likes: 32,
      isAuthor: false,
    },
  ])

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleAddReply = () => {
    if (!replyText.trim()) return

    const newReply = {
      id: String(replies.length + 1),
      author: "Anda",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      content: replyText,
      createdAt: new Date(),
      likes: 0,
      isAuthor: true,
    }

    setReplies([...replies, newReply])
    setReplyText("")
  }

  if (!thread) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Thread tidak ditemukan</h1>
            <Link href="/discussion">
              <Button className="bg-primary hover:bg-primary/90">Kembali ke Forum</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Header with Back Button */}
        <section className="bg-white border-b border-border sticky top-16 z-20">
          <div className="container mx-auto px-4 py-4">
            <Link href="/discussion" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-semibold">Kembali ke Forum</span>
            </Link>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Thread Header */}
            <div className="bg-white rounded-lg border border-border p-6 md:p-8 mb-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{category?.icon}</span>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {category?.name}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{thread.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-semibold text-foreground">{thread.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{thread.createdAt.toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{thread.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>{thread.replies} replies</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-sm max-w-none mb-8">
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">{thread.content}</p>
              </div>

              {/* Tags */}
              {thread.tags && thread.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border">
                  {thread.tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${
                    liked ? "bg-red-500 hover:bg-red-600" : "bg-muted hover:bg-muted/80"
                  } text-foreground`}
                >
                  <Heart size={18} fill={liked ? "currentColor" : "none"} />
                  <span>{likeCount}</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  <span>{replies.length} Replies</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 size={18} />
                  <span>Share</span>
                </Button>
              </div>
            </div>

            {/* Replies Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Replies ({replies.length})</h2>

              {/* Reply Form */}
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Tambahkan Reply</h3>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Tulis balasan Anda di sini..."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                />
                <div className="flex justify-end">
                  <Button onClick={handleAddReply} className="bg-primary hover:bg-primary/90" disabled={!replyText.trim()}>
                    Post Reply
                  </Button>
                </div>
              </div>

              {/* Replies List */}
              {replies.map((reply) => (
                <div key={reply.id} className="bg-white rounded-lg border border-border p-6">
                  {/* Reply Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={reply.authorImage}
                      alt={reply.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{reply.author}</span>
                        {reply.isAuthor && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Author</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {reply.createdAt.toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Reply Content */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">{reply.content}</p>

                  {/* Reply Actions */}
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Heart size={16} />
                      <span>{reply.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle size={16} />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
