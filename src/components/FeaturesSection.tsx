import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, FileText, CreditCard, Cloud, BarChart3, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Pencatatan Pemasukan & Pengeluaran",
    description: "Catat semua transaksi bisnis dengan mudah. Interface sederhana untuk input cepat setiap hari.",
    color: "text-primary"
  },
  {
    icon: FileText,
    title: "Laporan Otomatis",
    description: "Dapatkan laporan keuangan lengkap secara otomatis. Laba rugi, arus kas, dan analisis bisnis.",
    color: "text-accent"
  },
  {
    icon: CreditCard,
    title: "Manajemen Hutang Piutang",
    description: "Kelola hutang dan piutang dengan sistem reminder otomatis. Tidak ada lagi tagihan terlupa.",
    color: "text-primary"
  },
  {
    icon: Cloud,
    title: "Backup Cloud Aman",
    description: "Data tersimpan aman di cloud dengan enkripsi tingkat bank. Akses dari mana saja, kapan saja.",
    color: "text-accent"
  },
];

const additionalFeatures = [
  {
    icon: BarChart3,
    title: "Analytics Bisnis",
    description: "Insight mendalam tentang performa bisnis Anda dengan grafik yang mudah dipahami."
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    description: "Teknologi enkripsi terdepan untuk melindungi data keuangan bisnis Anda."
  },
  {
    icon: Clock,
    title: "Real-time Sync",
    description: "Sinkronisasi real-time di semua device. Update di HP langsung terlihat di laptop."
  },
  {
    icon: Users,
    title: "Multi-user Access",
    description: "Berikan akses terbatas ke karyawan untuk input data tanpa melihat laporan sensitif."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-20 bg-gradient-card">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Lengkap untuk{" "}
            <span className="text-primary">UMKM Modern</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Semua yang Anda butuhkan untuk mengelola keuangan bisnis dalam satu aplikasi yang mudah digunakan.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-brand transition-smooth border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color === 'text-primary' ? 'primary' : 'accent'}-light to-${feature.color === 'text-primary' ? 'primary' : 'accent'}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-card/50 rounded-2xl p-8 backdrop-blur-sm border border-border/30">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Fitur Tambahan untuk <span className="text-accent">Bisnis yang Berkembang</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-primary-light/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};