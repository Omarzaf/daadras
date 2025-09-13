import { Users, Award, Heart, Briefcase, Gift, GraduationCap, Users2, Package, ShoppingCart, HandHeart, Utensils, Truck } from "lucide-react"

export function ImpactStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-20">
      {/* Students Impacted */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">111+</h3>
        <p className="text-muted-foreground">Students Impacted</p>
      </div>

      {/* Partner Organizations */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">10+</h3>
        <p className="text-muted-foreground">Partner Organizations</p>
      </div>

      {/* Sewing machines & business tools distributed */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">20+</h3>
        <p className="text-muted-foreground">Sewing machines &amp; business tools distributed</p>
      </div>

      {/* Families supported with self-sustainability */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Gift className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">100+</h3>
        <p className="text-muted-foreground">Families supported with self-sustainability</p>
      </div>


      {/* Community initiatives strengthened */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Users2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">3+</h3>
        <p className="text-muted-foreground">Community initiatives strengthened</p>
      </div>

      {/* Ration packages distributed */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Package className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">500+</h3>
        <p className="text-muted-foreground">Ration packages distributed</p>
      </div>

      {/* Families fed through food & cash assistance */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <ShoppingCart className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">1,000+</h3>
        <p className="text-muted-foreground">Families fed through food &amp; cash assistance</p>
      </div>

      {/* Iftar drives & meal distributions */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Utensils className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">30+</h3>
        <p className="text-muted-foreground">Iftar drives &amp; meal distributions</p>
      </div>

      {/* Emergency responses delivered */}
      <div className="text-center">
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Truck className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">10+</h3>
        <p className="text-muted-foreground">Emergency responses delivered</p>
      </div>
    </div>
  )
}
