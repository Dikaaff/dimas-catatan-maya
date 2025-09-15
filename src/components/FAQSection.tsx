import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Apakah dhimas.ai gratis?",
    answer: "Ya! dhimas.ai memiliki paket Gratis selamanya dengan fitur dasar yang sudah cukup untuk UMKM kecil. Anda bisa mencatat hingga 50 transaksi per bulan, membuat laporan dasar, dan menggunakan backup lokal tanpa biaya apapun."
  },
  {
    question: "Bagaimana keamanan data saya?", 
    answer: "Keamanan data adalah prioritas utama kami. Semua data dienkripsi dengan standar bank (AES-256), disimpan di server cloud Indonesia yang bersertifikat ISO 27001. Kami juga melakukan backup otomatis dan tidak pernah membagikan data Anda kepada pihak ketiga."
  },
  {
    question: "Apakah bisa digunakan di HP dan laptop?",
    answer: "Tentu! dhimas.ai dirancang responsive dan bisa diakses melalui browser di HP, tablet, laptop, atau komputer. Semua data akan tersinkronisasi secara real-time di semua perangkat Anda."
  },
  {
    question: "Bagaimana cara input transaksi?",
    answer: "Sangat mudah! Cukup klik tombol 'Tambah Transaksi', pilih jenis (Pemasukan/Pengeluaran), masukkan nominal dan keterangan. Prosesnya hanya butuh kurang dari 30 detik. Anda juga bisa input transaksi secara bulk menggunakan Excel."
  },
  {
    question: "Apakah ada fitur reminder untuk hutang-piutang?",
    answer: "Ya! Di paket Pro dan Enterprise, tersedia fitur reminder otomatis via email dan WhatsApp untuk mengingatkan pelanggan yang memiliki hutang jatuh tempo. Anda juga bisa setting interval pengingat sesuai kebutuhan."
  },
  {
    question: "Bagaimana cara upgrade atau downgrade paket?",
    answer: "Anda bisa upgrade atau downgrade paket kapan saja melalui dashboard. Pembayaran dihitung secara proporsional (pro-rated). Jika downgrade, fitur premium akan tetap aktif hingga akhir periode billing."
  },
  {
    question: "Apakah data bisa diekspor?",
    answer: "Ya, di paket Pro dan Enterprise Anda bisa export laporan ke format Excel, PDF, atau CSV. Sangat berguna untuk keperluan pajak, audit, atau analisis lebih lanjut menggunakan software lain."
  },
  {
    question: "Ada training atau panduan penggunaan?",
    answer: "Tentu! Kami menyediakan video tutorial, dokumentasi lengkap, dan webinar gratis setiap minggu. Untuk paket Enterprise, tersedia personal training dan dedicated support manager."
  },
  {
    question: "Bagaimana jika saya tidak puas?",
    answer: "Kami memberikan garansi uang kembali 100% dalam 30 hari pertama untuk semua paket berbayar. Jika tidak puas, Anda bisa request refund penuh tanpa pertanyaan ribet."
  },
  {
    question: "Apakah cocok untuk semua jenis bisnis?",
    answer: "dhimas.ai dirancang khusus untuk UMKM di Indonesia, cocok untuk warung makan, toko kelontong, salon, bengkel, katering, konveksi, dan bisnis kecil-menengah lainnya. Interface dan fitur disesuaikan dengan kebutuhan lokal."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang{" "}
            <span className="text-primary">Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar dhimas.ai
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan? Kami siap membantu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              Chat WhatsApp
            </Button>
            <Button variant="ghost">
              Email Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};