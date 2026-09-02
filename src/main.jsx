import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  UserRound,
  BriefcaseBusiness,
  FolderOpen,
  Wrench,
  Mail,
  X,
  Minus,
  Square,
  ChevronRight,
  GitFork,
  UsersRound,
  FileText,
} from "lucide-react";
import profilePhoto from "./assets/chadapan-photo.png";
import aboutIcon from "./assets/xp-icons/about.png";
import experienceIcon from "./assets/xp-icons/experience.png";
import projectIcon from "./assets/xp-icons/project.png";
import skillsIcon from "./assets/xp-icons/skills.png";
import contactIcon from "./assets/xp-icons/contact.png";
import "./styles.css";

const desktopIcons = {
  about: aboutIcon,
  experience: experienceIcon,
  project: projectIcon,
  skills: skillsIcon,
  contact: contactIcon,
};

const sections = {
  about: {
    title: "About Me",
    icon: UserRound,
    body: (
      <>
        <div className="about-grid">
          <img className="avatar" src={profilePhoto} alt="Chadapan profile" />
          <div>
            <p className="greeting">
              Hello, I'm <strong>Chadapan Yukkriroek</strong> 👋
            </p>
            <p>
              Junior Software Developer building thoughtful, reliable web
              experiences.
            </p>
            <p className="muted">
              👩🏻‍💻 I enjoy solving problems through code and creating web experiences that are simple, intuitive, and engaging. I’m always curious to learn new technologies and improve the way I build things.
            </p>
          </div>
        </div>
        <div className="note">
          ✦ Junior Software Developer with hands-on experience in full-stack web
          development using the MERN stack, including React, Node.js,
          Express.js, MongoDB, JavaScript, HTML, and CSS. Recently completed an
          intensive software development bootcamp and built responsive web
          applications through individual and team-based projects. Leveraging
          two years of experience as a Motion Graphic Designer in the EdTech
          industry, bringing a strong eye for user experience, attention to
          detail, and effective cross-functional collaboration.
        </div>
      </>
    ),
  },
  experience: {
    title: "Experience",
    icon: BriefcaseBusiness,
    body: (
      <>
        <p className="lead">My professional journey.</p>
        <div className="timeline">
          <article>
            <span className="time">2026 — Present</span>
            <h3>
              Junior Software Developer <em>· Generation Thailand</em>
            </h3>
            <p>
              <ul>
                <li>Developed responsive web applications using React, JavaScript, Node.js, Express.js, MongoDB, and SQL.</li>
                <li>Built individual and team-based projects with hands-on experience in front-end and back-end development.</li>
                <li>Practiced REST API integration, database management, authentication, and collaborative development.</li>
              </ul>
            </p>
          </article>
          
          <article>
            <span className="time">2021 - 2023</span>
            <h3>
              Motion Graphic Designer <em>· Freelance</em>
            </h3>
            <p>
              <ul>
                <li>Designed information graphics and created animated infographics.</li>
                <li>Designed and animated open titles for programs.</li>
                <li>Provide graphic elements for infographics.</li>
              </ul>
            </p>
          </article>
          <article>
            <span className="time">2020 - 2020</span>
            <h3>
              Motion Graphic Designer <em>· Startdee</em>
            </h3>
            <p>
              <ul>
                <li>Daily use of Greenscreen keying.</li>
                <li>
                  Collaborated with team leadership and other stakeholders on
                  animation and production decision.
                </li>
                <li>
                  Edited raw video footage and add effects/elements to enhance
                  motion graphics.
                </li>
                <li>Added sound effects and environment background sound.</li>
              </ul>
            </p>
          </article>
        </div>
      </>
    ),
  },
  project: { title: "Projects", icon: FolderOpen },
  skills: {
    title: "Skills",
    icon: Wrench,
    body: (
      <>
        <p className="lead">Tools and technologies I work with.</p>
        <div className="skill-columns">
          <SkillGroup
            title="Frontend"
            items={["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Shadcn", "DaisyUI"]}
          />
          <SkillGroup
            title="Backend"
            items={["Node.js", "Express.js", "REST APIs", "JWT" , "Authentication", "Authorization"]}
          />
          <SkillGroup
            title="Database & Tools"
            items={[
              "MongoDB",
              "Supabase",
              "Stripe",
              "Cloudinary",
              "Git & GitHub",
              "Postman",
              "Figma",
              "Trello"
            ]}
          />
        </div>
        <p className="muted bottom-note">
          Update these with your actual skills, levels, or certifications.
        </p>
      </>
    ),
  },
  contact: {
    title: "Contact",
    icon: Mail,
    body: (
      <>
        <div className="contact-intro">
          <span className="big-mail">✉</span>
          <div>
            <p className="greeting">Let’s build something nice together.</p>
            <p>
              I’m open to junior developer roles, internships, and interesting
              collaborations.
            </p>
          </div>
        </div>
        <div className="contact-list">
          <a href="mailto:chadapan.y58@gmail.com">
            <Mail size={16} /> chadapan.y58@gmail.com <ChevronRight size={15} />
          </a>
          <a href="https://github.com/PloyIIV" target="_blank">
            <GitFork size={16} /> github.com/PloyIIV <ChevronRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/chadapanyukkriroek/"
            target="_blank"
          >
            <UsersRound size={16} /> linkedin.com/in/chadapanyukkriroek/{" "}
            <ChevronRight size={15} />
          </a>
          <a href="#">
            <FileText size={16} /> Download résumé <ChevronRight size={15} />
          </a>
        </div>
        {/* <p className="muted bottom-note">Replace these links with yours.</p> */}
      </>
    ),
  },
};

const projects = [
  {
    number: "01",
    title: "Merry Match",
    text: "A festive card-matching game built with the MERN stack.",
    tags: ["MERN", "SQL", "Supabase", "Stripe"],
    githubUrl: "https://github.com/PloyIIV/Merry-Mathch-Final-Project",
    liveUrl: "https://merry-project-frontend.vercel.app",
    demoSize: { width: 1920, height: 1080 },
  },
  {
    number: "02",
    title: "GearVerse",
    text: "A team-built full-stack platform for buying and selling gear.",
    tags: ["React", "MERN", "Team Project"],
    githubUrl: "https://github.com/nookarin/team-07-ProjectGV-Sprint2",
    liveUrl: "",
  },
  {
    number: "03",
    title: "Chat App",
    text: "A real-time chat application for hospital staff communication.",
    tags: ["React", "Node.js", "Authentication"],
    githubUrl: "https://github.com/PloyIIV/HospitalApp",
    liveUrl: "",
  },
  {
    number: "04",
    title: "MapleStory Clicker",
    text: "A MapleStory-themed cookie clicker game with a nostalgic twist.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "",
    liveUrl: "https://maplestoryclicker.vercel.app/",
    demoSize: { width: 1920, height: 1080 },
  },
  {
    number: "05",
    title: "Apple Clone",
    text: "A pixel-perfect clone of the Apple website, fully responsive.",
    tags: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "https://apple-clone-dusky-ten.vercel.app/",
  },
];

function Project({ project, onDemo }) {
  const openProject = () => {
    if (project.liveUrl) {
      onDemo(project);
    } else if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    }
  };
  const openGitHub = (event) => {
    event.stopPropagation();
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="project-card" onClick={openProject}>
      <span>{project.number}</span>
      <h3>{project.title}</h3>
      <p>{project.text}</p>
      <div>
        {project.tags.map((tag) => (
          <b key={tag}>{tag}</b>
        ))}
      </div>
      <div className="project-actions">
        {project.liveUrl && (
          <button className="project-btn" onClick={openProject}>
            Live Demo <ChevronRight size={13} />
          </button>
        )}
        {project.githubUrl && (
          <button className="project-btn" onClick={openGitHub}>
            GitHub <ChevronRight size={13} />
          </button>
        )}
      </div>
    </div>
  );
}
function ProjectContent({ onDemo }) {
  return (
    <>
      <p className="lead">A few things I’ve enjoyed creating.</p>
      <div className="project-grid">
        {projects.map((project) => (
          <Project key={project.number} project={project} onDemo={onDemo} />
        ))}
      </div>
    </>
  );
}
function SkillGroup({ title, items }) {
  return (
    <section className="skill-group">
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item}>
          <span>◆</span>
          {item}
        </p>
      ))}
    </section>
  );
}

function Window({ section, position, zIndex, onClose, onFocus, onDemo }) {
  const data = sections[section];
  const Icon = data.icon;
  const drag = useRef(null);
  const beginDrag = (event) => {
    if (event.button !== 0) return;
    onFocus();
    drag.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event) => {
    if (!drag.current) return;
    onFocus({
      x: Math.max(
        10,
        Math.min(window.innerWidth - 280, event.clientX - drag.current.x),
      ),
      y: Math.max(
        18,
        Math.min(window.innerHeight - 150, event.clientY - drag.current.y),
      ),
    });
  };
  const endDrag = () => {
    drag.current = null;
  };
  return (
    <section
      className="window"
      style={{ left: position.x, top: position.y, zIndex }}
      aria-label={data.title}
      onPointerDown={() => onFocus()}
    >
      <header
        className="window-title"
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
      >
        <div>
          <Icon size={16} />
          <span>{data.title}</span>
        </div>
        <div className="controls">
          <button aria-label="Minimize">
            <Minus size={13} />
          </button>
          <button aria-label="Maximize">
            <Square size={10} />
          </button>
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>
      </header>
      <main className="window-body">
        {section === "project" ? <ProjectContent onDemo={onDemo} /> : data.body}
      </main>
    </section>
  );
}

function DemoWindow({ project, position, zIndex, onClose, onFocus }) {
  const drag = useRef(null);
  const beginDrag = (event) => {
    if (event.button !== 0) return;
    onFocus();
    drag.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event) => {
    if (!drag.current) return;
    onFocus({
      x: Math.max(
        10,
        Math.min(window.innerWidth - 280, event.clientX - drag.current.x),
      ),
      y: Math.max(
        18,
        Math.min(window.innerHeight - 150, event.clientY - drag.current.y),
      ),
    });
  };
  const demoSize = project.demoSize || {};
  const windowStyle = {
    left: position.x,
    top: position.y,
    zIndex,
    ...(demoSize.width
      ? { width: `min(${demoSize.width}px, calc(100vw - 20px))` }
      : {}),
    ...(demoSize.height
      ? { height: `min(${demoSize.height}px, calc(100vh - 100px))` }
      : {}),
  };
  return (
    <section
      className="window demo-window"
      style={windowStyle}
      onPointerDown={() => onFocus()}
    >
      <header
        className="window-title"
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={() => {
          drag.current = null;
        }}
      >
        <div>
          <FolderOpen size={16} />
          <span>{project.title} — Live Demo</span>
        </div>
        <div className="controls">
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>
      </header>
      <main
        className="demo-body"
        style={
          demoSize.height
            ? { height: `calc(min(${demoSize.height}px, calc(100vh - 100px)) - 60px)` }
            : {}
        }
      >
        {project.liveUrl ? (
          <iframe
            title={`${project.title} live demo`}
            src={project.liveUrl}
            style={
              demoSize.height
                ? { height: "100%", minHeight: "365px" }
                : {}
            }
          />
        ) : (
          <DemoPlaceholder project={project} />
        )}
      </main>
    </section>
  );
}

function DemoPlaceholder({ project }) {
  return (
    <div className="demo-placeholder">
      <div className="demo-nav">
        <b>{project.title}</b>
        <span>Home&nbsp;&nbsp; Features&nbsp;&nbsp; About</span>
      </div>
      <div className="demo-hero">
        <div>
          <small>LIVE PREVIEW</small>
          <h2>
            A beautiful project
            <br />
            starts here.
          </h2>
          <p>
            Replace <code>liveUrl</code> in <code>src/main.jsx</code> with your
            deployed project URL to embed it in this window.
          </p>
          <button>Get started</button>
        </div>
        <div className="demo-shapes">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [windows, setWindows] = useState({});
  const [start, setStart] = useState(false);
  const [topZ, setTopZ] = useState(10);
  const openWindow = (section) =>
    setWindows((current) =>
      current[section]
        ? current
        : {
            ...current,
            [section]: {
              x: 190 + Object.keys(current).length * 28,
              y: 120 + Object.keys(current).length * 24,
              z: topZ + 1,
            },
          },
    );
  const focusWindow = (id, position) => {
    const z = topZ + 1;
    setTopZ(z);
    setWindows((current) => ({
      ...current,
      [id]: { ...current[id], ...(position ? position : {}), z },
    }));
  };
  const closeWindow = (id) =>
    setWindows((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  const openDemo = (project) => {
    const id = `demo-${project.number}`;
    const isFullscreen = project.demoSize?.width === 1920;
    setWindows((current) => ({
      ...current,
      [id]: current[id]
        ? { ...current[id], z: topZ + 1 }
        : {
            x: isFullscreen ? 0 : 260,
            y: isFullscreen ? 0 : 155,
            z: topZ + 1,
            project,
          },
    }));
    setTopZ((z) => z + 1);
  };
  return (
    <div className="xp-screen">
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="hill hill-back" />
      <div className="hill hill-front" />
      <div className="desktop">
        <div className="brand">
          <span>Chadapan.exe</span>
          <small>Junior Software Developer</small>
        </div>
        <div className="icons">
          {Object.entries(sections).map(([key, value]) => {
            const Icon = value.icon;
            return (
              <button
                className={`desktop-icon ${windows[key] ? "selected" : ""}`}
                key={key}
                onClick={() => openWindow(key)}
              >
                <img
                  className={`icon-art icon-${key}`}
                  src={desktopIcons[key]}
                  alt=""
                />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
        {Object.entries(windows).map(([id, item]) =>
          id.startsWith("demo-") ? (
            <DemoWindow
              key={id}
              project={item.project}
              position={item}
              zIndex={item.z}
              onClose={() => closeWindow(id)}
              onFocus={(position) => focusWindow(id, position)}
            />
          ) : (
            <Window
              key={id}
              section={id}
              position={item}
              zIndex={item.z}
              onClose={() => closeWindow(id)}
              onFocus={(position) => focusWindow(id, position)}
              onDemo={openDemo}
            />
          ),
        )}
      </div>
      {start && (
        <div className="start-menu">
          <div className="start-side">portfolio</div>
          <div>
            <strong>Welcome!</strong>
            <button onClick={() => setStart(false)}>Close menu</button>
          </div>
        </div>
      )}
      <footer className="taskbar">
        <button className="start-button" onClick={() => setStart(!start)}>
          <i>⊞</i> start
        </button>
        {Object.keys(windows).map((id) => (
          <button
            className="task-button"
            key={id}
            onClick={() => focusWindow(id)}
          >
            {id.startsWith("demo-")
              ? `${windows[id].project.title} Demo`
              : sections[id].title}
          </button>
        ))}
        <div className="tray">
          <span>◒</span>
          <span>EN</span>
          <time>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
