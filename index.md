---
layout: default
title: "Mi Página de Investigador"
---

# ¡Bienvenido a mi página personal! 👋

Soy **[Tu Nombre]**, investigador en [tu campo de especialización].  
Mis intereses incluyen [tema 1], [tema 2] y [tema 3].  

## 🔎 Sobre esta web
En este sitio encontrarás:
- 📄 **[Sobre mí](/about/)** → Más información sobre mi trayectoria.
- 📚 **[Publicaciones](/publications/)** → Artículos y proyectos recientes.
- 📝 **Últimos posts del blog** → [Ver más](/blog/)

---

## 📰 Últimas Publicaciones  

<ul>
  {% for post in site.posts limit:3 %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%d-%m-%Y" }})</li>
  {% endfor %}
</ul>

📌 [Ver todas las publicaciones](/blog/)

---

## 📬 Contacto  
Si quieres ponerte en contacto conmigo, puedes escribirme a:  
📧 **[tuemail@ejemplo.com](mailto:tuemail@ejemplo.com)**  
🌐 [Tu perfil académico](#) | 🔬 [Google Scholar](#) | 🏛️ [ResearchGate](#)
