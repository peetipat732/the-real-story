import { Link } from "react-router-dom";
import { User, BookOpen, Users } from "lucide-react";

const members = [
  {
    id: "peetipat",
    name: "นายปีติภัทร ผู้ช่วยบำรุง",
    role: "สมาชิก",
    color: "bg-pastel-pink",
  },
  {
    id: "hankla",
    name: "นายหาญกล้า รัตนะ",
    role: "สมาชิก",
    color: "bg-pastel-blue",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-pastel-pink via-pastel-yellow to-pastel-blue py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Logo Placeholder */}
          <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-card shadow-lg animate-scale-in">
            <span className="text-5xl">🐻🧈</span>
          </div>
          
          <h1 className="mb-2 text-4xl font-bold text-foreground animate-fade-in md:text-5xl">
            หมีเนยตัวจริง
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            กลุ่มโปรเจกต์สุดเจ๋ง
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pastel-green/30 blur-3xl" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pastel-purple/30 blur-3xl" />
      </header>

      {/* Course Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-card p-6 shadow-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-blue">
              <BookOpen className="h-5 w-5 text-secondary-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">ข้อมูลวิชา</h2>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p><span className="font-medium text-foreground">วิชา:</span> Digital Platform</p>
            <p><span className="font-medium text-foreground">อาจารย์ผู้สอน:</span> [ชื่ออาจารย์]</p>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="container mx-auto px-4 pb-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-pastel-yellow/50 to-pastel-green/50 p-6 shadow-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="mb-4 text-xl font-semibold text-foreground">เกี่ยวกับโปรเจกต์</h2>
          <p className="text-muted-foreground leading-relaxed">
            นี่คือเว็บไซต์แนะนำสมาชิกกลุ่ม "หมีเนยตัวจริง" สำหรับวิชา Digital Platform 
            โปรเจกต์นี้จัดทำขึ้นเพื่อนำเสนอข้อมูลของสมาชิกในกลุ่ม พร้อมทักษะและความสามารถของแต่ละคน
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-8 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-purple">
            <Users className="h-5 w-5 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">สมาชิกในกลุ่ม</h2>
        </div>
        
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {members.map((member, index) => (
            <Link
              key={member.id}
              to={`/profile/${member.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${member.color} transition-transform duration-300 group-hover:scale-110`}>
                  <User className="h-10 w-10 text-foreground/70" />
                </div>
                <h3 className="text-center text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm text-muted-foreground">
                  {member.role}
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block rounded-full bg-primary/20 px-4 py-1 text-sm text-primary-foreground transition-colors group-hover:bg-primary/40">
                    ดูโปรไฟล์
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 หมีเนยตัวจริง - Digital Platform Project</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
