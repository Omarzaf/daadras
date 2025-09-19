"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Smartphone, Copy, CheckCircle } from "lucide-react"
import { bankAccounts } from "@/lib/bankInformation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function BankTransfersSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="bank-transfers" className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
            >
              Direct Transfer Methods
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
          >
            Choose your preferred method for secure bank transfers. All donations are tax-deductible.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border"
        >
          <Accordion type="single" collapsible className="w-full">
            {bankAccounts.map((account, index) => (
              <AccordionItem key={account.name} value={`bank-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    {account.type === "bank" ? (
                      <Building2 className="h-5 w-5 text-primary" />
                    ) : (
                      <Smartphone className="h-5 w-5 text-primary" />
                    )}
                    <span className="font-medium">{account.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {account.type === "bank" ? "Bank Transfer" : "Mobile Wallet"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">Account Number</div>
                          <div className="font-mono font-medium">{account.accountNumber}</div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(account.accountNumber, `${account.name.toLowerCase()}-account`)}
                        >
                          {copiedField === `${account.name.toLowerCase()}-account` ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">IBAN</div>
                          <div className="font-mono font-medium">{account.iban}</div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(account.iban, `${account.name.toLowerCase()}-iban`)}
                        >
                          {copiedField === `${account.name.toLowerCase()}-iban` ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Account Title</div>
                        <div className="font-medium">{account.title}</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-8">
            <h3 className="font-medium text-foreground mb-2">Important Note</h3>
            <p className="text-sm text-muted-foreground">
              After making a transfer, please email us at daadrashr@gmail.com with your transaction details so we can send you a receipt and acknowledgment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
