 import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import emailjs from '@emailjs/browser';

const DataStream = () => {
  const pointsRef = useRef();
  const count = 1200;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#818cf8" />
    </points>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [aiReply, setAiReply] = useState('');

  // AI auto reply simulation
  useEffect(() => {
    if (status === 'sent') {
      const timer = setTimeout(() => {
        setAiReply(
          `Hi ${formData.name || 'there'}, 👋\n\nThanks for reaching out! I’ve received your message and will get back to you within 24 hours.\n\nMeanwhile, feel free to explore more of my projects 🚀`
        );
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
         import.meta.env.VITE_SER_KEY,
        import.meta.env.VITE_TEMP_KEY,
        formData,
        import.meta.env.VITE_PUB_KEY
      )
      .then(() => {
        setStatus('sent');
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
        }, 500);
      })
      .catch(() => {
        setStatus('idle');
      });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#6366f1" />
          <DataStream />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[2, 64, 64]}>
              <MeshDistortMaterial
                color="#4f46e5"
                speed={2}
                distort={0.5}
                radius={1}
                emissive="#1e1b4b"
              />
            </Sphere>
          </Float>
          <fog attach="fog" args={['#020617', 8, 25]} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-16 items-center">

        {/* Left Text */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left animate-fadeIn">
          <h2 className="text-indigo-400 font-mono text-sm uppercase tracking-[0.4em]">
            Connect with me
          </h2>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
              SOMETHING GREAT.
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-md leading-relaxed">
            Whether it's AI, Full-Stack Development, or a futuristic product idea —
            I’m always excited to collaborate and innovate.
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl space-y-6 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/20 hover:scale-[1.02]"
          >
            <input
              required
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-indigo-500/40 transition-all"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-indigo-500/40 transition-all"
            />

            <textarea
              required
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-indigo-500/40 resize-none transition-all"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                status === 'sent'
                  ? 'bg-emerald-500'
                  : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/40'
              }`}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent ✓'}
            </button>

            {/* AI Reply Box */}
            {aiReply && (
              <div className="mt-6 p-5 bg-indigo-500/10 border border-indigo-400/20 rounded-xl text-indigo-300 whitespace-pre-line animate-fadeIn">
                🤖 AI Auto Reply:
                <p className="mt-2 text-sm">{aiReply}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;