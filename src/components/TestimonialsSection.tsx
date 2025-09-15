import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ibu Sari",
    business: "Warung Nasi Gudeg Sari",
    location: "Yogyakarta",
    content: "dhimas.ai sangat membantu warung saya! Sekarang gak ribet lagi catat pemasukan pengeluaran. Tinggal input di HP langsung dapat laporan. Mas Dimas nya lucu lagi! 😊",
    rating: 5,
    avatar: "🧕"
  },
  {
    id: 2,
    name: "Pak Ahmad",
    business: "Toko Elektronik Berkah",
    location: "Surabaya",
    content: "Fitur hutang-piutang nya ngebantu banget buat toko saya. Gak ada lagi pelanggan yang lupa bayar karena ada notifikasi otomatis. Recommended deh!",
    rating: 5,
    avatar: "👨"
  },
  {
    id: 3,
    name: "Mbak Rina",
    business: "Salon Cantik Rina",
    location: "Bandung",
    content: "Paling suka sama laporan otomatisnya. Jadi tau persis berapa untung setiap bulan. Tampilan nya juga bagus dan gampang dipakai. Top!",
    rating: 5,
    avatar: "👩"
  },
  {
    id: 4,
    name: "Pak Budi",
    business: "Bengkel Motor Jaya",
    location: "Semarang", 
    content: "Backup cloud nya bikin tenang. Pernah HP rusak tapi data tetep aman. Interface nya simple, cocok buat yang gak terlalu ngerti teknologi kayak saya.",
    rating: 5,
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    name: "Ibu Dewi",
    business: "Katering Dewi Sari",
    location: "Jakarta",
    content: "Sejak pakai dhimas.ai, bisnis katering jadi lebih teratur. Bisa pantau cash flow harian dengan mudah. Fitur multi-user juga membantu koordinasi sama tim.",
    rating: 5,
    avatar: "👩‍🍳"
  },
  {
    id: 6,
    name: "Pak Joko",
    business: "Toko Kelontong Berkah",
    location: "Solo",
    content: "Yang paling suka itu analytics nya detail banget. Jadi tau produk mana yang laku keras, mana yang perlu dikurangi. Mantap pokoknya!",
    rating: 5,
    avatar: "👨‍💼"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const currentTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <section id="testimoni" className="py-20 bg-primary-light/30">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dipercaya{" "}
            <span className="text-primary">1000+ UMKM</span>{" "}
            di Indonesia
          </h2>
          <p className="text-lg text-muted-foreground">
            Dengarkan cerita sukses para pemilik usaha yang telah merasakan manfaat dhimas.ai
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(247 ulasan)</span>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-brand transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.business}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Quote className="h-6 w-6 text-accent/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-smooth flex items-center justify-center"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    i === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-smooth flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};