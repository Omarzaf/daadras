import Link from "next/link"

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F443F] to-[#1a5a54] text-white py-20">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Initiatives
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our key initiatives focused on education, economic development, and humanitarian aid to create sustainable change in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F443F] mb-6">
              Creating Lasting Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our initiatives are designed to address the root causes of poverty and inequality. Through education, economic empowerment, and emergency relief, we work to build stronger, more resilient communities.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Economic Upliftment */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#0F443F] to-[#1a5a54] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0F443F] mb-4">Economic Upliftment</h3>
                <p className="text-gray-600 mb-6">
                  Empowering individuals and families through skill development, microfinance, and sustainable livelihood programs.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F443F] mb-2">Key Focus Areas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Skill development training</li>
                    <li>• Microfinance support</li>
                    <li>• Small business development</li>
                    <li>• Women's empowerment</li>
                  </ul>
                </div>
                <Link 
                  href="/initiatives/economic-upliftment" 
                  className="inline-block bg-[#0F443F] text-white px-6 py-3 rounded-lg hover:bg-[#1a5a54] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Project Salam */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#0F443F] to-[#1a5a54] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0F443F] mb-4">Project Salam</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive education program focused on holistic development through IT, Chess, Social-Emotional Learning, and Public Speaking.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F443F] mb-2">Program Components:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Information Technology training</li>
                    <li>• Chess for cognitive development</li>
                    <li>• Social-Emotional Learning</li>
                    <li>• Public Speaking skills</li>
                  </ul>
                </div>
                <Link 
                  href="/initiatives/project-salam" 
                  className="inline-block bg-[#0F443F] text-white px-6 py-3 rounded-lg hover:bg-[#1a5a54] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Emergency Relief */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#0F443F] to-[#1a5a54] flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0F443F] mb-4">Emergency Relief</h3>
                <p className="text-gray-600 mb-6">
                  Emergency relief and food security programs providing essential supplies to families in crisis and vulnerable communities.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#0F443F] mb-2">Relief Services:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Emergency food distribution</li>
                    <li>• Disaster relief support</li>
                    <li>• Essential supplies provision</li>
                    <li>• Community resilience building</li>
                  </ul>
                </div>
                <Link 
                  href="/initiatives/emergency-relief" 
                  className="inline-block bg-[#0F443F] text-white px-6 py-3 rounded-lg hover:bg-[#1a5a54] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F443F] mb-6 text-left">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl text-left">
              Through our initiatives, we've been able to create meaningful change in communities across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0F443F] mb-2">500+</div>
              <div className="text-gray-600">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0F443F] mb-2">200+</div>
              <div className="text-gray-600">Students Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0F443F] mb-2">50+</div>
              <div className="text-gray-600">Skills Training Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0F443F] mb-2">1000+</div>
              <div className="text-gray-600">Relief Packages Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0F443F] text-white py-16">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Your support helps us expand our initiatives and reach more communities in need. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ways-to-give" 
              className="inline-block bg-white text-[#0F443F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              href="/get-involved" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0F443F] transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
