import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";
import masDimasMascot from "@/assets/mas-dimas-mascot.png";

const footerLinks = {
  product: [
    { name: "Fitur", href: "#fitur" },
    { name: "Harga", href: "#harga" },
    { name: "Demo", href: "#demo" },
    { name: "API", href: "#api" }
  ],
  company: [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Blog", href: "#blog" },
    { name: "Karir", href: "#karir" },
    { name: "Press Kit", href: "#press" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Tutorial", href: "#tutorial" },
    { name: "Status", href: "#status" },
    { name: "Kontak", href: "#kontak" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookie" },
    { name: "GDPR", href: "#gdpr" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-accent-light/20 border-t border-border/50">
      {/* Main Footer */}
      <div className="container px-4 mx-auto py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <img 
                  src={masDimasMascot} 
                  alt="Mas Dimas" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">dhimas.ai</h3>
                <p className="text-sm text-muted-foreground">Catatan Keuangan UMKM</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Solusi pencatatan keuangan terpercaya untuk UMKM Indonesia. 
              Mudah digunakan, aman, dan sesuai dengan kebutuhan bisnis lokal.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@dhimas.ai</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary-light hover:text-primary"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-8">
            
            {/* Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produk</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Dukungan</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary-light/50 to-accent-light/30 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Dapatkan Tips Keuangan UMKM
            </h4>
            <p className="text-muted-foreground mb-6">
              Berlangganan newsletter kami untuk tips, trik, dan insight terbaru seputar manajemen keuangan UMKM.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default" size="lg">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-30" />
      
      {/* Bottom Footer */}
      <div className="container px-4 mx-auto py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© 2024 dhimas.ai. Dibuat dengan</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>untuk UMKM Indonesia.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};