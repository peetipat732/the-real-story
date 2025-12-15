import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, Github, Instagram } from "lucide-react";

const ProfilePeetipat = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-pastel-pink to-pastel-yellow py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            กลับหน้าหลัก
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-pastel-blue/30 blur-3xl" />
      </header>

      {/* Profile Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Profile Card */}
          <div className="rounded-3xl bg-card p-8 shadow-xl animate-fade-in">
            {/* Profile Picture */}
            <div className="mx-auto mb-6 h-36 w-36 rounded-full overflow-hidden shadow-lg animate-scale-in">
              <img
                src="/Peetipat.jpg"
                alt="นายปีติภัทร ผู้ช่วยบำรุง"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h1 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
              นายปีติภัทร ผู้ช่วยบำรุง
            </h1>
            
            {/* Student Info */}
            <div className="mb-6 text-center">
              <span className="inline-block rounded-full bg-pastel-pink/50 px-4 py-1 text-sm text-foreground">
                รหัสนักศึกษา: 640710732
              </span>
              <p className="mt-2 text-muted-foreground">
                สาขา: [Information Technology]
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Bio */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">เกี่ยวกับฉัน</h2>
              <p className="leading-relaxed text-muted-foreground">
                สวัสดีครับ! ผมเป็นสมาชิกของกลุ่ม "หมีเนยตัวจริง" 
                มีความสนใจในด้าน [ความสนใจ] และกำลังศึกษาเกี่ยวกับ [สิ่งที่กำลังเรียนรู้]
                หวังว่าจะได้เรียนรู้และพัฒนาทักษะใหม่ๆ ผ่านโปรเจกต์นี้ครับ
              </p>
            </div>

            {/* Social Media */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">ช่องทางติดต่อ</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-pastel-green px-4 py-2 text-sm font-medium text-foreground transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <Phone className="h-4 w-4" />
                  LINE
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-pastel-purple px-4 py-2 text-sm font-medium text-foreground transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-pastel-blue px-4 py-2 text-sm font-medium text-foreground transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-pastel-yellow px-4 py-2 text-sm font-medium text-foreground transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 หมีเนยตัวจริง - Digital Platform Project</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePeetipat;
