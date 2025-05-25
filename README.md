# 🚀 Gnosix - Landing Page SaaS

Una landing page moderna y profesional para Gnosix, empresa especializada en infraestructura inteligente y soluciones IA personalizadas.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con gradientes y efectos visuales
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🤖 Agente IA Integrado**: Chat inteligente con persistencia de conversaciones
- **⚡ Animaciones Fluidas**: Tech stack con scroll infinito y efectos suaves
- **📧 Formularios Funcionales**: Sistema de contacto integrado
- **🌙 Tema Oscuro**: Diseño profesional en tonos oscuros con acentos dorados

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: Radix UI
- **Iconos**: Lucide React
- **Animaciones**: CSS personalizado + Tailwind

## 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/gnosix-landing.git
cd gnosix-landing
```

2. **Instala las dependencias**
```bash
npm install --legacy-peer-deps
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/                  # Componentes base de UI
│   ├── navbar.tsx           # Barra de navegación
│   ├── footer.tsx           # Pie de página
│   ├── contact-form.tsx     # Formulario de contacto
│   └── ai-sales-agent.tsx   # Agente de IA conversacional
├── public/
│   ├── logos/               # Logos del tech stack
│   └── favicon-32x32.png    # Favicon
└── lib/
    └── utils.ts             # Utilidades
```

## 🎯 Secciones Principales

### 🏠 Hero Section
- Título principal con call-to-action
- Descripción de servicios
- Botón de navegación a servicios

### 💼 Servicios
- **Lanza tu SaaS a medida**: Plataformas web/móvil personalizadas
- **IA privada integrada**: Sistemas de IA con datos propios
- **Automatiza procesos internos**: Optimización de flujos de trabajo
- **Controla tu infraestructura**: Ecosistemas IA completos

### 💰 Paquetes de Precios
- **Launch Kit** ($5,999): Primer salto con IA
- **Smart System Pro** ($12,999): Infraestructura IA privada
- **Total AI Infrastructure** ($24,999): Ecosistema IA completo

### 🔧 Tech Stack
- Carousel infinito con logos de tecnologías
- Animación continua sin resets
- 13 tecnologías principales: Supabase, OpenAI, Vercel, React, etc.

### 🤖 Agente de IA
- Chat conversacional inteligente
- Persistencia de conversaciones en localStorage
- Flujos optimizados para conversión
- Formularios integrados para captura de leads

## ⚙️ Configuración

### Variables de Entorno
Crea un archivo `.env.local`:

```env
# Configuraciones futuras para APIs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Personalización de Colores
Los colores principales están definidos en `app/globals.css`:

```css
:root {
  --primary: 47 100% 50%;        /* Amarillo dorado */
  --background: 0 0% 0%;         /* Negro */
  --foreground: 0 0% 100%;       /* Blanco */
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros Proveedores
```bash
npm run build
npm start
```

## 📱 Características del Agente IA

- **Persistencia**: Las conversaciones se guardan en localStorage
- **Flujos Inteligentes**: Diferentes rutas según el tipo de cliente
- **Captura de Leads**: Formularios integrados para agendar consultas
- **Responsive**: Funciona perfectamente en móvil y desktop

## 🎨 Animaciones Personalizadas

- **Scroll Infinito**: Tech stack con loop perfecto
- **Efectos Hover**: Transiciones suaves en cards y botones
- **Gradientes Animados**: Efectos de shimmer y glow
- **Typing Indicator**: Simulación de escritura en el chat

## 📄 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Gnosix** - Infraestructura Inteligente
- Website: [gnosix.com](https://gnosix.com)
- Email: contacto@gnosix.com

---

⭐ **¡Dale una estrella al proyecto si te ha sido útil!** 