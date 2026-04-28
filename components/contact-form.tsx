"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  mensagem: string;
};

export function ContactForm() {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setErrorMsg("");

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "51345785";
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

    if (!formId) {
      setErrorMsg("ID do formulário HubSpot não configurado. Adicione NEXT_PUBLIC_HUBSPOT_FORM_ID nas variáveis de ambiente.");
      return;
    }

    try {
      // Endpoint da API v3 do HubSpot
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: data.nome },
            { name: "email", value: data.email },
            { name: "hs_whatsapp_phone_number", value: data.whatsapp },
            { name: "message", value: data.mensagem }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar para o HubSpot");
      }

      setSuccess(true);
      reset();
    } catch (err: unknown) {
      setErrorMsg("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
      if (err instanceof Error) {
        console.error("HubSpot Submission Error:", err.message);
      }
    }
  };

  return (
    <div className="bg-card p-10 md:p-16 rounded-[40px] border border-border/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4 tracking-tight">{t('contato.headline')}</h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">{t('contato.subhead')}</p>

      {success ? (
        <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{t('contato.successTitle')}</h3>
          <p className="text-muted-foreground max-w-sm mx-auto mb-8">{t('contato.successMsg')}</p>
          <Button 
            onClick={() => setSuccess(false)}
            variant="outline" 
            className="rounded-full px-8 text-primary border-primary hover:bg-primary/10"
          >
            {t('contato.successBtn')}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          {errorMsg && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center font-medium animate-in fade-in">
              {errorMsg}
            </div>
          )}
          <div className="flex flex-col gap-6">
            <div>
              <Input 
                {...register("nome", { required: t('contato.form.nameReq') })}
                placeholder={t('contato.form.name')} 
                className="h-14 rounded-lg border-border bg-transparent px-5 text-sm font-mono placeholder:text-muted-foreground shadow-none focus-visible:ring-primary/40" 
              />
              {errors.nome && <span className="text-red-500 text-xs mt-1">{errors.nome.message}</span>}
            </div>
            
            <div>
              <Input 
                {...register("email", { 
                  required: t('contato.form.emailReq'),
                  pattern: { value: /^\S+@\S+$/i, message: t('contato.form.emailInv') }
                })}
                type="email" 
                placeholder={t('contato.form.email')} 
                className="h-14 rounded-lg border-border bg-transparent px-5 text-sm font-mono placeholder:text-muted-foreground shadow-none focus-visible:ring-primary/40" 
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>

            <div>
              <Input 
                {...register("whatsapp", { required: t('contato.form.whatsappReq') })}
                type="tel" 
                placeholder={t('contato.form.whatsapp')} 
                className="h-14 rounded-lg border-border bg-transparent px-5 text-sm font-mono placeholder:text-muted-foreground shadow-none focus-visible:ring-primary/40" 
              />
              {errors.whatsapp && <span className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</span>}
            </div>

            <div>
              <Textarea 
                {...register("mensagem", { required: t('contato.form.messageReq') })}
                placeholder={t('contato.form.message')} 
                className="h-[150px] min-h-[150px] max-h-[150px] rounded-lg border-border bg-transparent p-5 text-sm font-mono placeholder:text-muted-foreground shadow-none resize-none overflow-y-auto focus-visible:ring-primary/40" 
              />
              {errors.mensagem && <span className="text-red-500 text-xs mt-1">{errors.mensagem.message}</span>}
            </div>
          </div>

          <div className="flex justify-center w-full pt-6">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-3/4 lg:w-2/3 bg-accent text-accent-foreground font-sans font-bold text-sm tracking-widest h-14 rounded-full hover:opacity-90 transition-opacity uppercase shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contato.sending') : t('contato.button')}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
