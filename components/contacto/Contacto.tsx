"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "../scroll-animation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Validación con Zod
const ContactoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellido: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("Correo inválido"),
  telefono: z.string().min(6, "Teléfono inválido"),
  servicio: z.string().min(1, "Seleccione un servicio"),
  mensaje: z.string().min(1, "El mensaje es obligatorio"),
});

type ContactoFormData = z.infer<typeof ContactoSchema>;

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(ContactoSchema),
  });

  const onSubmit = async (data: ContactoFormData) => {
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito");
        reset();
      } else {
        alert("Hubo un problema al enviar el mensaje");
      }
    } catch (error) {
      alert("Error de red al enviar el formulario");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Formulario */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="rounded-xl bg-gray-800 p-6 shadow-md border border-gray-700">
                <h2 className="mb-6 text-2xl font-bold text-orange-400">
                  Envíenos un mensaje
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-gray-300" htmlFor="nombre">Nombre</Label>
                      <Input
                        id="nombre"
                        {...register("nombre")}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
                      />
                      {errors.nombre && (
                        <p className="text-sm text-orange-300">
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300" htmlFor="apellido">Apellido</Label>
                      <Input
                        id="apellido"
                        {...register("apellido")}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
                      />
                      {errors.apellido && (
                        <p className="text-sm text-orange-300">
                          {errors.apellido.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300" htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
                    />
                    {errors.email && (
                      <p className="text-sm text-orange-300">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300" htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      {...register("telefono")}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
                    />
                    {errors.telefono && (
                      <p className="text-sm text-orange-300">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300" htmlFor="servicio">Servicio que le interesa</Label>
                    <select
                      id="servicio"
                      {...register("servicio")}
                      className="w-full rounded-md bg-gray-700 border border-gray-600 text-white p-2 focus:border-orange-400 focus:ring-orange-400"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="control-insectos">Control de insectos</option>
                      <option value="control-roedores">Control de roedores</option>
                      <option value="sanitizacion">Sanitización</option>
                      <option value="fumigacion">Fumigación general</option>
                    </select>
                    {errors.servicio && (
                      <p className="text-sm text-orange-300">
                        {errors.servicio.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300" htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      {...register("mensaje")}
                      className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
                    />
                    {errors.mensaje && (
                      <p className="text-sm text-orange-300">
                        {errors.mensaje.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Ubicación */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="rounded-xl bg-gray-800 p-6 shadow-md border border-gray-700 h-[60vh] flex flex-col">
                <h2 className="mb-4 text-xl font-bold text-orange-400">
                  Nuestra Ubicación
                </h2>
                <div className="flex-1 overflow-hidden rounded-lg">
                  <iframe
                    title="Mapa de ubicación Lonko"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.385147800106!2d-64.13756362444511!3d-31.40351299562899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd583bf2c027%3A0x10aad2b8a537c25a!2sLavadero%203%20Amigos!5e0!3m2!1ses!2sar!4v1743965170029!5m2!1ses!2sar"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
