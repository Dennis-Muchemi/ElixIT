export function ContactHero() {
    return (
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Let's Create Something 
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent"> Amazing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Ready to transform your digital presence? We're here to help bring your vision to life. 
            Reach out and let's start the conversation.
          </p>
        </div>
      </section>
    )
  }