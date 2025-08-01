import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string
  title: string
  description: string
  imageUrl: string
  date: string
  slug: string
  category?: string // Added category for the new variants
}

interface BlogPostItemProps extends React.HTMLAttributes<HTMLDivElement> {
  post: BlogPost
  variant?:
    | "hero-spotlight"
    | "minimal-card"
    | "compact-list"
    | "image-left-detail"
    | "stacked-modern"
    | "overlay-bottom" // New variant
    | "image-top-details" // New variant
}

export function BlogPostItem({ post, variant = "stacked-modern", className, ...props }: BlogPostItemProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  switch (variant) {
    case "hero-spotlight":
      return (
        <Link
          href={`/blog/${post.slug}`}
          className={cn("block relative group overflow-hidden rounded-xl", className)}
          {...props}
        >
          <Image
            src={post.imageUrl || "/placeholder.svg?height=600&width=1200&query=abstract digital landscape"}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10 flex flex-col justify-end text-white">
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-base md:text-lg line-clamp-3 text-gray-200 mb-4">{post.description}</p>
            <Button variant="secondary" className="w-fit">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Link>
      )
    case "minimal-card":
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block", className)} {...props}>
          <Card className="border-2 border-border rounded-lg p-4 flex flex-col items-center text-center hover:border-primary transition-colors duration-200 h-full">
            <Image
              src={post.imageUrl || "/placeholder.svg?height=100&width=100&query=geometric pattern"}
              alt={post.title}
              width={100}
              height={100}
              className="rounded-full object-cover aspect-square mb-4"
            />
            <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">{post.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="w-3 h-3 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </Card>
        </Link>
      )
    case "compact-list":
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block group", className)} {...props}>
          <div className="py-4 border-b border-border last:border-b-0 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.description}</p>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0 md:ml-4 flex-shrink-0">
              <CalendarDays className="w-3 h-3 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </Link>
      )
    case "image-left-detail":
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block", className)} {...props}>
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <div className="relative w-full md:w-2/5 flex-shrink-0">
              <Image
                src={post.imageUrl || "/placeholder.svg?height=300&width=500&query=modern architecture"}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-56 md:h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-5 md:p-6 flex-grow">
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-xl md:text-2xl font-bold line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="mt-2 text-sm md:text-base line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center text-sm text-muted-foreground p-0">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{formattedDate}</span>
              </CardContent>
            </div>
          </Card>
        </Link>
      )
    case "stacked-modern":
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block group", className)} {...props}>
          <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-card h-full flex flex-col">
            <div className="relative overflow-hidden rounded-t-xl">
              <Image
                src={post.imageUrl || "/placeholder.svg?height=250&width=500&query=abstract tech lines"}
                alt={post.title}
                width={500}
                height={250}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex-grow p-5">
              <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm line-clamp-3">{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center text-sm text-muted-foreground p-5 pt-0">
              <CalendarDays className="w-3 h-3 mr-2" />
              <span>{formattedDate}</span>
            </CardContent>
          </Card>
        </Link>
      )
    case "overlay-bottom": // New variant inspired by screenshot 1
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block group", className)} {...props}>
          <Card className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
            <Image
              src={
                post.imageUrl ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20190426-K5c0Zrx9c1RKIl2V4RzFDF0OESMMlo.png"
              }
              alt={post.title}
              width={600}
              height={600}
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
              <div className="flex items-center text-sm text-gray-300 mb-2">
                {post.category && <span className="font-semibold uppercase mr-2">{post.category}</span>}
                {post.category && <span className="mr-2">•</span>}
                <span>{formattedDate}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        </Link>
      )
    case "image-top-details": // New variant inspired by screenshot 2
      return (
        <Link href={`/blog/${post.slug}`} className={cn("block group", className)} {...props}>
          <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-card h-full flex flex-col">
            <Image
              src={
                post.imageUrl ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-31%20190504-wrDkWY0NXXcvYzWQEqj2pAO1l9HhJo.png"
              }
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <CardHeader className="flex-grow p-5">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                {post.category && <span className="font-semibold uppercase mr-2">{post.category}</span>}
                {post.category && <span className="mr-2">•</span>}
                <span>{formattedDate}</span>
              </div>
              <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      )
  }
}
