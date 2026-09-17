import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RanDee - ร้านดีบอกต่อ",
  description: "แพลตฟอร์มค้นหาร้านค้าและบริการคุณภาพ",
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RanDee - ร้านดีบอกต่อ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ยินดีต้อนรับสู่แพลตฟอร์มค้นหาร้านค้าและบริการคุณภาพ
        </p>
        <div className="mt-8">
          <p className="text-gray-500">
            ค้นหาร้านค้าที่ดีที่สุดจากคำแนะนำของคนในพื้นที่
          </p>
        </div>
      </div>
    </div>
  );
}
