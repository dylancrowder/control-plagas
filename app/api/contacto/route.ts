import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, apellido, email, telefono, servicio, mensaje } = body;

  if (!nombre || !apellido || !email || !telefono || !servicio || !mensaje) {
    return NextResponse.json(
      { message: "Faltan campos obligatorios" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio interesado:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return NextResponse.json({ message: "Mensaje enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
