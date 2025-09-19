export interface DonationFAQ {
  id: string;
  question: string;
  answer: string;
}

export const donationFAQs: DonationFAQ[] = [
  {
    id: "item-1",
    question: "How are donations used?",
    answer: "100% of your donations go directly to our programs. We use funds for educational materials, technology equipment, teacher training, student support, and community development initiatives. Administrative costs are covered separately through grants and partnerships."
  },
  {
    id: "item-3",
    question: "What types of in-kind donations do you accept?",
    answer: "We accept computers and technology equipment, educational materials and books, clothing for distribution, professional services (legal, accounting, marketing), and valuable business connections. Please contact us before donating to ensure we can properly utilize your contribution."
  },
  {
    id: "item-5",
    question: "How can I track the impact of my donation?",
    answer: "We provide regular updates through our newsletter and annual reports showing how donations are used and the impact achieved. You can also follow our progress on our website's news section and social media channels for real-time updates on our programs and beneficiaries."
  },
  {
    id: "item-6",
    question: "Is there a minimum donation amount?",
    answer: "There is no minimum donation amount. Every contribution, regardless of size, makes a meaningful difference. However, please note that bank transfer fees may apply depending on your bank and transfer method."
  }
];

// {
//   id: "item-2", 
//   question: "Will I receive a receipt for tax purposes?",
//   answer: "Yes, we provide official donation receipts for all contributions. After making a bank transfer, email us at donations@daadras.org with your transaction details, and we'll send you a receipt within 3-5 business days."
// },
