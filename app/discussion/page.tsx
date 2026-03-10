'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FORUM_CATEGORIES, FORUM_THREADS } from "@/lib/forum-data"
import { Heart, MessageCircle, Eye, Search, Plus, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useMemo } from "react"
import Link from "next/link"
import { CreateThreadModal } from "@/components/create-thread-modal"

export default function DiscussionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "trending">("latest")
  const [isCreateThreadOpen, setIsCreateThreadOpen] = useState(false)
  const [threads, setThreads] = useState(FORUM_THREADS)

  const handleCreateThread = async (threadData: {
    title: string
    category: string
    content: string
    author: string
    tags?: string[]
  }) => {
    const newThread = {
      id: `thread-${Date.now()}`,
      title: threadData.title,
      category: threadData.category as any,
      author: threadData.author,
      authorImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${threadData.author}`,
      content: threadData.content,
      createdAt: new Date(),
      replies: 0,
      views: 0,
      likes: 0,
      isFeatured: false,
      isPinned: false,
      tags: threadData.tags,
    }

    setThreads([newThread as any, ...threads])
    setIsCreateThreadOpen(false)
    alert(`Thread "${threadData.title}" berhasil dibuat!`)
  }

  const filteredThreads = useMemo(() => {
    let filtered = threads

    if (selectedCategory) {
      filtered = filtered.filter((t) => t.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "latest") {
        return b.createdAt.getTime() - a.createdAt.getTime()
      } else if (sortBy === "popular") {
        return b.views - a.views
      } else {
        return b.likes - a.likes
      }
    })

    return sorted
  }, [selectedCategory, searchQuery, sortBy, threads])

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">JJ Pet House Community Forum</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Tempat berbagi cerita, tips, dan pengalaman bersama komunitas pecinta hewan peliharaan
            </p>
          </div>
        </section>

        {/* Create Thread Button */}
        <section className="bg-white border-b border-border py-4 sticky top-16 z-30">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 items-center">
              <MessageSquare className="text-primary" size={20} />
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground">Punya cerita atau pertanyaan? Bagikan di forum komunitas kami</p>
              </div>
              <Button onClick={() => setIsCreateThreadOpen(true)} className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Plus size={18} />
                Create Thread
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="bg-white border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Cari thread, topik, atau tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Views</option>
                <option value="trending">Trending</option>
              </select>
            </div>

            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                All Categories
              </button>
              {FORUM_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Threads List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredThreads.length === 0 ? (
              <div className="text-center py-16">
                <MessageCircle className="mx-auto text-muted-foreground mb-4" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-2">No threads found</h3>
                <p className="text-muted-foreground mb-6">
                  Tidak ada thread yang sesuai dengan pencarian Anda
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredThreads.map((thread) => (
                  <Link key={thread.id} href={`/discussion/${thread.id}`}>
                    <div
                      className="bg-white border border-border rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow cursor-pointer group"
                    >
                    {/* Header */}
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-xl md:text-2xl">
                          {thread.authorImage}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow min-w-0">
                        {/* Title */}
                        <div className="flex items-start gap-2 mb-2">
                          {thread.isPinned && (
                            <span className="text-yellow-500 flex-shrink-0" title="Pinned">
                              📌
                            </span>
                          )}
                          {thread.isFeatured && (
                            <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded flex-shrink-0">
                              Featured
                            </span>
                          )}
                          <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {thread.title}
                          </h3>
                        </div>

                        {/* Author and Meta */}
                        <div className="text-sm text-muted-foreground mb-3">
                          <span className="font-medium">{thread.author}</span>
                          <span className="mx-2">•</span>
                          <span>
                            {Math.floor((Date.now() - thread.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days
                            ago
                          </span>
                        </div>

                        {/* Tags */}
                        {thread.tags && thread.tags.length > 0 && (
                          <div className="flex gap-2 mb-3 flex-wrap">
                            {thread.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {FORUM_CATEGORIES.find((c) => c.id === thread.category)?.icon}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground">
                            {FORUM_CATEGORIES.find((c) => c.id === thread.category)?.name}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex flex-col items-end gap-3 flex-shrink-0">
                        {/* Reply Count */}
                        <div className="text-right">
                          <div className="text-lg md:text-xl font-bold text-foreground">
                            {thread.replies}
                          </div>
                          <div className="text-xs text-muted-foreground">Replies</div>
                        </div>

                        {/* Views and Likes */}
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>{thread.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart size={14} />
                            <span>{thread.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Stats */}
                    <div className="md:hidden flex gap-4 mt-3 pt-3 border-t border-muted text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        <span>{thread.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{thread.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{thread.likes} likes</span>
                      </div>
                    </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Category Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Forum Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FORUM_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${category.color} p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-primary">{category.threadCount}</div>
                  <div className="text-xs text-muted-foreground">Threads</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Pet Community</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pecinta hewan peliharaan dan bagikan pengalaman, tips, serta cerita seru Anda
            </p>
            <Button onClick={() => setIsCreateThreadOpen(true)} className="bg-white text-primary hover:bg-gray-100 flex items-center gap-2 mx-auto">
              <Plus size={20} />
              Create Your First Thread
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <CreateThreadModal
        isOpen={isCreateThreadOpen}
        onClose={() => setIsCreateThreadOpen(false)}
        onSubmit={handleCreateThread}
      />
    </>
  )
}
