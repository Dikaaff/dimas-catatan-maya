import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "0",
    period: "selamanya",
    description: "Cocok untuk UMKM yang baru memulai",
    icon: Star,
    popular: false,
    features: [
      "Pencatatan transaksi (50/bulan)",
      "Laporan dasar",
      "1 user",
      "Backup lokal",
      "Support email"
    ],
    limitations: [
      "Fitur analytics terbatas",
      "Tanpa reminder hutang-piutang"
    ],
    cta: "Mulai Gratis",
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "49.000",
    period: "/bulan", 
    description: "Paling populer untuk UMKM berkembang",
    icon: Zap,
    popular: true,
    features: [
      "Transaksi unlimited",
      "Laporan lengkap + analytics",
      "5 users",
      "Cloud backup otomatis",
      "Manajemen hutang-piutang",
      "Reminder otomatis",
      "Export ke Excel/PDF",
      "Support prioritas"
    ],
    limitations: [],
    cta: "Upgrade ke Pro",
    variant: "hero" as const
  },
  {
    name: "Enterprise",
    price: "149.000", 
    period: "/bulan",
    description: "Untuk bisnis besar dengan kebutuhan khusus",
    icon: Crown,
    popular: false,
    features: [
      "Semua fitur Pro",
      "Unlimited users",
      "API integration",
      "Custom reports",
      "Dedicated support manager",
      "Training & onboarding",
      "White-label option",
      "Advanced analytics & forecasting"
    ],
    limitations: [],
    cta: "Hubungi Sales",
    variant: "accent" as const
  }
];

export const PricingSection = () => {
  return (
    <section id="harga" className="py-20 bg-gradient-card">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilih Paket yang{" "}
            <span className="text-primary">Tepat untuk Bisnis Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Mulai gratis, upgrade kapan saja sesuai kebutuhan bisnis yang berkembang
          </p>
          
          {/* Money Back Guarantee */}
          <div className="inline-flex items-center gap-2 bg-accent-light px-4 py-2 rounded-full text-sm font-medium text-accent-foreground">
            <Check className="h-4 w-4" />
            <span>Garansi uang kembali 30 hari</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-brand transition-smooth ${
                  plan.popular ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-brand">
                      Paling Populer
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-hero' : 'bg-gradient-to-br from-muted to-primary-light/20'
                  }`}>
                    <Icon className={`h-8 w-8 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">Rp</span>
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border/50 space-y-3">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-3">
                          <div className="h-5 w-5 flex-shrink-0 mt-0.5">
                            <div className="w-4 h-4 border border-muted-foreground rounded-full opacity-50"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">
            Semua paket sudah termasuk SSL encryption & GDPR compliance
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Setup gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Migrasi data gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel kapan saja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};