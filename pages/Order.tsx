
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { Button } from '../components/ui/Button';
import { submitOrder } from '../services/api';
import { Check, ChevronRight, Loader2, UploadCloud } from 'lucide-react';

// Fix for framer-motion type error
const m = motion as any;

const createSchema = (t: any) => z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number required"),
  garmentType: z.string().min(1, "Select a garment"),
  embroideryStyle: z.string().min(1, "Select a style"),
  fabricType: z.string().min(1, "Fabric preference required"),
  deliveryDate: z.string().min(1, "Date required"),
  notes: z.string().optional(),
});

export const Order: React.FC = () => {
  const { language } = useStore();
  const t = translations[language].order;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = createSchema(t);
  type FormSchema = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      // Logic to handle file upload would go here (e.g. uploading to S3/Cloudinary first)
      // For this demo, we just pass text data to the mock service
      await submitOrder(data as any);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
        {/* Fix for framer-motion type error */}
        <m.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-surface-light dark:bg-surface-dark p-10 rounded-sm shadow-2xl text-center border-t-4 border-primary"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl mb-4 text-gray-900 dark:text-white">Request Received</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t.success}</p>
          <Button onClick={() => window.location.href = '/'}>Return Home</Button>
        </m.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
           <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Est. 1990</span>
           <h1 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">{t.title}</h1>
           <p className="text-gray-500 dark:text-gray-400 font-light">{t.subtitle}</p>
        </div>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Section 1: Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> {t.steps.contact}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.name}</label>
                  <input {...register('fullName')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" />
                  {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.email}</label>
                  <input {...register('email')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                 <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.phone}</label>
                  <input {...register('phone')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Details */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2 mt-8">
                <span className="w-8 h-px bg-primary"></span> {t.steps.details}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  {/* Fix: use 'garmentType' instead of 'garment' to match Translation interface */}
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.garmentType}</label>
                  <select {...register('garmentType')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white">
                    <option value="">Select...</option>
                    <option value="gown">Evening Gown</option>
                    <option value="wedding">Wedding Dress</option>
                    <option value="jacket">Jacket / Coat</option>
                    <option value="textile">Home Textile</option>
                  </select>
                   {errors.garmentType && <p className="text-red-500 text-xs">{errors.garmentType.message}</p>}
                </div>
                <div className="space-y-2">
                  {/* Fix: use 'embroideryStyle' instead of 'style' to match Translation interface */}
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.embroideryStyle}</label>
                   <select {...register('embroideryStyle')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white">
                    <option value="">Select...</option>
                    <option value="traditional">Traditional Persian</option>
                    <option value="modern">Modern Minimalist</option>
                    <option value="beadwork">Beadwork & Sequins</option>
                    <option value="goldwork">Goldwork</option>
                  </select>
                  {errors.embroideryStyle && <p className="text-red-500 text-xs">{errors.embroideryStyle.message}</p>}
                </div>
                 <div className="space-y-2">
                  {/* Fix: use 'fabricType' instead of 'fabric' to match Translation interface */}
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.fabricType}</label>
                  <input {...register('fabricType')} placeholder="e.g. Silk, Velvet" className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" />
                  {errors.fabricType && <p className="text-red-500 text-xs">{errors.fabricType.message}</p>}
                </div>
                <div className="space-y-2">
                  {/* Fix: use 'deliveryDate' instead of 'date' to match Translation interface */}
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.deliveryDate}</label>
                  <input type="date" {...register('deliveryDate')} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white dark:[color-scheme:dark]" />
                  {errors.deliveryDate && <p className="text-red-500 text-xs">{errors.deliveryDate.message}</p>}
                </div>
              </div>

              {/* File Upload UI Mock */}
              <div className="mt-6">
                <label className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Reference Image (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-sm p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer group bg-gray-50 dark:bg-black/20">
                   <UploadCloud className="text-gray-400 group-hover:text-primary mb-2 transition-colors" size={32} />
                   <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                   <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG (max. 10MB)</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">{t.fields.notes}</label>
                  <textarea {...register('notes')} rows={4} className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" />
              </div>
            </div>

            <div className="pt-6">
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                {isSubmitting ? <Loader2 className="animate-spin" /> : t.fields.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
