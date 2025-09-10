import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Calendar, Github, Linkedin, Mail, Twitter, Send, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  subject: z.string().min(3, {
    message: "Subject is required"
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  })
});
type FormData = z.infer<typeof formSchema>;
export function Contact() {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mjkrrgzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        })
      });
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. Fransi will get back to you soon.",
          action: <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-green-500" />
          </div>
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Message failed to send",
        description: "There was an error sending your message. Please try again.",
        action: <div className="h-8 w-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return <section id="contact" className="relative py-32 overflow-hidden">
      {/* Quantum Neural Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,255,0.02)_49%,rgba(0,255,255,0.02)_51%,transparent_52%)] bg-[length:60px_60px]" />
      </div>

      {/* Floating Quantum Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        x: [0, Math.random() * 400 - 200],
        y: [0, Math.random() * 400 - 200],
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.5, 1]
      }} transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "mirror",
        delay: Math.random() * 5
      }} />)}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Quantum Glow */}
        <motion.div className="text-center mb-20" initial={{
        opacity: 0,
        y: -30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Neural Connection Interface
            </h2>
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-50 rounded-full" />
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Initiate secure communication protocols for cybersecurity consultation, 
            AI security research collaboration, and quantum-encrypted discussions.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Information */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-8">Let's Connect</h3>
                
                <div className="space-y-8">
                  <motion.div className="flex items-start group/item cursor-pointer" whileHover={{
                  x: 10
                }} transition={{
                  type: "spring",
                  stiffness: 400
                }}>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/40 to-cyan-500/40 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <div className="relative p-4 rounded-xl bg-slate-700/50 border border-cyan-500/20 group-hover/item:border-cyan-400/40 transition-all duration-300">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Encrypted Email</h4>
                      <a href="mailto:francyayele@gmail.com" className="text-slate-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 text-lg">
                        francyayele@gmail.com
                      </a>
                      <p className="text-sm text-slate-400 mt-1">PGP encryption available</p>
                    </div>
                  </motion.div>
                  
                  <motion.div className="flex items-start group/item cursor-pointer" whileHover={{
                  x: 10
                }} transition={{
                  type: "spring",
                  stiffness: 400
                }}>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 to-purple-500/40 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <div className="relative p-4 rounded-xl bg-slate-700/50 border border-purple-500/20 group-hover/item:border-purple-400/40 transition-all duration-300">
                        <Calendar className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Quantum Meeting</h4>
                      <Button variant="link" className="p-0 text-slate-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text h-auto text-lg font-normal transition-all duration-300">
                        Schedule secure consultation
                      </Button>
                      <p className="text-sm text-slate-400 mt-1">End-to-end encrypted calls</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
                    Neural Network Links
                  </h3>
                  <div className="flex space-x-6">
                    {[{
                    icon: Github,
                    href: "https://github.com/fransi",
                    color: "cyan",
                    label: "GitHub"
                  }, {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/fransi-mengesha/",
                    color: "purple",
                    label: "LinkedIn"
                  }, {
                    icon: Twitter,
                    href: "https://twitter.com/fransi",
                    color: "cyan",
                    label: "Twitter"
                  }].map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="relative group/social" whileHover={{
                    scale: 1.1,
                    y: -5
                  }} whileTap={{
                    scale: 0.95
                  }} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: index * 0.1
                  }} aria-label={social.label}>
                        <div className={`absolute -inset-3 bg-gradient-to-r ${social.color === 'cyan' ? 'from-cyan-500/30 to-cyan-500/30' : 'from-purple-500/30 to-purple-500/30'} rounded-xl blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                        <div className={`relative p-4 rounded-xl bg-slate-700/50 border ${social.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-400/40' : 'border-purple-500/20 hover:border-purple-400/40'} transition-all duration-300`}>
                          <social.icon className={`h-6 w-6 ${social.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                        </div>
                      </motion.a>)}
                  </div>
                </div>

                {/* Enhanced Location Info */}
                <div className="mt-10 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-xl border border-slate-600/30">
                  <h4 className="font-bold text-lg text-white mb-3">Quantum Hub Location</h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    <span className="text-cyan-400 font-semibold">Base:</span> Addis Ababa, Ethiopia<br />
                    <span className="text-purple-400 font-semibold">Global reach:</span> Cybersecurity consulting, AI security research, and quantum computing collaborations worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-8">
                  Secure Message Portal
                </h3>
                
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-200">Identity Verification</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} placeholder="Enter your designation..." className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-cyan-400/20 transition-all duration-300 text-base py-3" />
                              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-200">Encrypted Channel</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} type="email" placeholder="quantum.secure@domain.com" className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-400/60 focus:ring-purple-400/20 transition-all duration-300 text-base py-3" />
                              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="subject" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-200">Mission Objective</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} placeholder="AI Security Research | Cyber Defense | Quantum Collaboration" className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-cyan-400/20 transition-all duration-300 text-base py-3" />
                              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-200">Encrypted Payload</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea {...field} placeholder="Initialize secure communication... Describe your cybersecurity challenge, AI security research needs, or collaboration proposal. All transmissions are quantum-encrypted." className="min-h-36 bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-400/60 focus:ring-purple-400/20 transition-all duration-300 text-base resize-none" />
                              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }} className="pt-4">
                      <Button type="submit" className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25" disabled={isSubmitting}>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? <>
                              <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3" animate={{
                            rotate: 360
                          }} transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                          }} />
                              Transmitting...
                            </> : <>
                              Initiate Secure Transmission
                              <Send className="ml-3 h-5 w-5" />
                            </>}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Security Badge */}
        <motion.div className="text-center mt-16" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 1
      }}>
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-slate-300 text-sm font-medium">
              🔒 End-to-end encrypted • Quantum-secure protocols • Zero-knowledge architecture
            </span>
          </div>
        </motion.div>
      </div>
    </section>;
}
export default Contact;