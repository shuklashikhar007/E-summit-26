import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { book_data } from "../book_data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const bookIndex = Number.parseInt(params.id);
  const book = book_data[bookIndex];

  if (!book) {
    notFound();
  }

  const averageRating =
    book.reviews.reduce((acc, review) => acc + review.rating, 0) /
    book.reviews.length;

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-none p-6 min-h-[500px]">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-4">
            <img
              src={book.imgURL || "/placeholder.svg"}
              alt={book.title}
              className="w-full rounded-lg shadow-lg"
              width={300}
              height={450}
            />
          </div>

          <CardContent className="space-y-6 p-0">
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground">
                Author(s) : {book.author}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= averageRating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-semibold">
                {averageRating.toFixed(2)}
              </span>
              <Badge variant="secondary">{book.genre}</Badge>
            </div>

            <p className="mt-4 text-muted-foreground">{book.description}</p>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              {book.reviews.map((review, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.reviewer}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                  {idx !== book.reviews.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
