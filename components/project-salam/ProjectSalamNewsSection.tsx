"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getSalamArticles } from "@/lib/articles";

export function ProjectSalamNewsSection() {
  const salamArticles = getSalamArticles();
  
  // Don't render the component if there are no articles
  if (!salamArticles || salamArticles.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-16 mb-12"
    >
      <div className="text-left mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
          Latest News & Updates
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
          Stay updated with the latest developments and success stories from Project Salam.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salamArticles.slice(0, 3).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              {article.image ? (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Featured Image</p>
                  </div>
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {article.type}
                  </Badge>
                  <span className="text-sm font-medium text-foreground bg-muted px-2 py-1 rounded-md">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <CardTitle className="text-lg font-space-grotesk group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {article.excerpt}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  By {article.authors ? article.authors.join(", ") : "Daadras Team"}
                </p>
                <Link href={`/news-resources/article/${article.layout || 'layout-1'}/${article.slug}`} className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/news-resources/news">
          <Button variant="outline" className="bg-background hover:bg-muted">
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
