import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import masDimasMascot from "@/assets/mas-dimas-mascot.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center batik-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 to-background"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Catatan Keuangan{" "}
                <span className="text-primary">UMKM</span>{" "}
                Lebih Mudah
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Kelola pemasukan, pengeluaran, hutang-piutang dengan mudah. 
                Laporan otomatis & backup cloud untuk UMKM modern.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Gratis 30 hari</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Backup otomatis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Data aman</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Coba Gratis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="accent-outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">
                Dipercaya oleh <span className="font-semibold text-primary">1000+</span> UMKM di Indonesia
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium">4.9/5 (247 ulasan)</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot & Dashboard Preview */}
          <div className="relative">
            {/* Dashboard Preview Background */}
            <div className="bg-card rounded-2xl shadow-brand-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-card-foreground">Dashboard UMKM</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                </div>
              </div>
              
              {/* Mock Dashboard Elements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Pemasukan Hari Ini</p>
                  <p className="text-2xl font-bold text-primary">Rp 2.150K</p>
                </div>
                <div className="bg-accent-light p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Pengeluaran</p>
                  <p className="text-2xl font-bold text-accent-foreground">Rp 890K</p>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Transaksi Terakhir</p>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Penjualan Produk A</span>
                    <span className="text-sm font-medium text-primary">+Rp 150K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Beli Bahan Baku</span>
                    <span className="text-sm font-medium text-red-500">-Rp 75K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mas Dimas Mascot */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 lg:w-40 lg:h-40">
              <img
                src={masDimasMascot}
                alt="Mas Dimas - Maskot dhimas.ai"
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};