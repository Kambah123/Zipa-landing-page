"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/utils";
import { AlertTriangle, Loader2, Mail } from "lucide-react";

const schema = z.object({
 fullName:z.string().trim().min(2), email:z.string().email(), contact:z.string().trim().min(5), cityState:z.string().trim().min(2), occupation:z.string().trim().min(2), organization:z.string().trim().min(1), department:z.string().optional(), track:z.enum(["community","content","growth"]), socialLinks:z.string().optional(), audienceSize:z.string().optional(), cryptoExperience:z.enum(["yes","no"]), whyJoin:z.string().trim().min(20), howPromote:z.string().trim().min(20), hoursPerWeek:z.string().trim().min(1), consent:z.boolean().refine(Boolean), honeypot:z.string().max(0).optional(),
});
type FormData=z.infer<typeof schema>;
const fields:[keyof FormData,string][]=[["fullName","Full name"],["email","Email address"],["contact","WhatsApp or preferred contact"],["cityState","City and state"],["occupation","What do you do?"],["organization","School, workplace, or organization"]];

export default function AmbassadorForm(){
 const router=useRouter(); const [status,setStatus]=useState<"idle"|"loading"|"error">("idle"); const [message,setMessage]=useState("");
 const {register,handleSubmit,control,formState:{errors}}=useForm<FormData>({resolver:zodResolver(schema),defaultValues:{fullName:"",email:"",contact:"",cityState:"",occupation:"",organization:"",department:"",socialLinks:"",audienceSize:"",whyJoin:"",howPromote:"",hoursPerWeek:"",consent:false,honeypot:""}});
 const submit=async(data:FormData)=>{setStatus("loading");setMessage("");try{const r=await fetch("/api/ambassadors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const j=await r.json().catch(()=>({}));if(r.ok){router.push("/ambassadors/thank-you");return}setStatus("error");setMessage(j.error||"Something went wrong. Please try again.");}catch{setStatus("error");setMessage("Network error. Please try again or email musa@usezipa.xyz.")}};
 return <Card className="bg-card border-border"><CardContent className="p-6 md:p-8"><form onSubmit={handleSubmit(submit)} className="space-y-6" noValidate><div className="absolute opacity-0 pointer-events-none" aria-hidden="true"><input {...register("honeypot")} tabIndex={-1} autoComplete="off" /></div>{status==="error"&&<Alert variant="destructive"><AlertTriangle className="size-4"/><AlertTitle>Submission issue</AlertTitle><AlertDescription><p>{message}</p><a href="mailto:musa@usezipa.xyz?subject=Zipa Ambassador Application" className="inline-flex items-center gap-1 text-primary hover:underline mt-2"><Mail className="size-3.5"/> Email the Zipa team</a></AlertDescription></Alert>}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{fields.map(([name,label])=><div className="space-y-2" key={name}><Label htmlFor={name}>{label} <span className="text-destructive">*</span></Label><Input id={name} type={name==="email"?"email":"text"} {...register(name)} aria-invalid={!!errors[name]} className={cn(errors[name]&&"border-destructive")}/>{errors[name]&&<p className="text-sm text-destructive">This field is required.</p>}</div>)}
 <div className="space-y-2"><Label htmlFor="department">Course / department / role</Label><Input id="department" {...register("department")}/></div>
 <div className="space-y-2"><Label>Preferred track *</Label><Controller control={control} name="track" render={({field})=><Select value={field.value} onValueChange={field.onChange}><SelectTrigger><SelectValue placeholder="Choose a track"/></SelectTrigger><SelectContent><SelectItem value="community">Community Ambassador</SelectItem><SelectItem value="content">Content Ambassador</SelectItem><SelectItem value="growth">Growth and Merchant Ambassador</SelectItem></SelectContent></Select>}/></div>
 <div className="space-y-2"><Label htmlFor="socialLinks">Social links</Label><Input id="socialLinks" placeholder="X, Instagram, LinkedIn, etc." {...register("socialLinks")}/></div><div className="space-y-2"><Label htmlFor="audienceSize">Audience size (optional)</Label><Input id="audienceSize" placeholder="e.g. 2,000" {...register("audienceSize")}/></div>
 <div className="space-y-2"><Label>Have you used crypto before? *</Label><Controller control={control} name="cryptoExperience" render={({field})=><Select value={field.value} onValueChange={field.onChange}><SelectTrigger><SelectValue placeholder="Choose one"/></SelectTrigger><SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent></Select>}/></div><div className="space-y-2"><Label htmlFor="hoursPerWeek">Hours available per week *</Label><Input id="hoursPerWeek" placeholder="e.g. 3 hours" {...register("hoursPerWeek")}/></div></div>
 <div className="space-y-2"><Label htmlFor="whyJoin">Why do you want to join? *</Label><Textarea id="whyJoin" rows={5} {...register("whyJoin")}/>{errors.whyJoin&&<p className="text-sm text-destructive">Please write at least 20 characters.</p>}</div><div className="space-y-2"><Label htmlFor="howPromote">How would you explain or promote Zipa? *</Label><Textarea id="howPromote" rows={5} {...register("howPromote")}/>{errors.howPromote&&<p className="text-sm text-destructive">Please write at least 20 characters.</p>}</div>
 <Controller control={control} name="consent" render={({field})=><div className="flex items-start gap-3"><Checkbox id="consent" checked={field.value} onCheckedChange={field.onChange}/><Label htmlFor="consent" className="text-sm leading-relaxed font-normal">I agree to follow Zipa's community, privacy, disclosure, and communication rules.</Label></div>}/>
 <Button type="submit" disabled={status==="loading"} className="w-full rounded-full">{status==="loading"?<><Loader2 className="size-4 animate-spin"/>Submitting…</>:"Submit application"}</Button></form></CardContent></Card>;
}
