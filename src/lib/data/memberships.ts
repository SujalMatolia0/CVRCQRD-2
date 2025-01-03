export interface MembershipType {
  id: number;
  bg_image?: string;
  hero_heading?: string;
  title?: string;
  text?: string[];
  membership_name?: string;
  membership_type_2_image?: string;
  membership_type_1_image?: string;
  membership_type?: string;
  membership_points?: string[];
  membership_price_1?: string;
  membership_type_2?: string;
  point_title_2?: string[];
  membership_price_2?: string;
  button?: string[];
  faq?: { question: string; answer: string }[];
}

export const MainMembershipData: MembershipType[] = [
  {
    id: 1,
    bg_image: '/membership.jpeg',
    hero_heading: 'Memberships',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The membership will renew automatically after a year. Post your payment, your account will start receiving membership benefits. Membership once paid, shall not be refunded, You will be able to cancel the subscription anytime',
      'For more information or incase of any queries please drop a mail to neocosmicx@gmail.com',
    ],
    button: ['Individual', 'Student', 'Enterprise'],
  },
];

export const MembershipData: MembershipType[] = [
  {
    id: 1,
    bg_image: '/individual_hero.jpeg',
    hero_heading: 'Individual Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The membership will renew automatically after a year. Post your payment, your account will start receiving membership benefits. Membership once paid, shall not be refunded, You will be able to cancel the subscription anytime',
      'For more information or incase of any queries please drop a mail to neocosmicx@gmail.com',
    ],
    membership_name: 'Individual Memberships',
    membership_type: 'General Membership',
    membership_points: [
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_1: 'Buy For $110.99',
    membership_type_2: 'Premium Membership',
    membership_type_2_image: '/individual_premium.jpeg',
    membership_type_1_image: '/individual_general.jpeg',
    point_title_2: [
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_2: 'Buy For $120.99',
    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
  {
    id: 2,
    bg_image: '/quantum-27.webp',
    hero_heading: ' Corporate Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The membership will renew automatically after a year. Post your payment, your account will start receiving membership benefits. Membership once paid, shall not be refunded, You will be able to cancel the subscription anytime',
      'For more information or incase of any queries please drop a mail to neocosmicx@gmail.com',
    ],
    membership_name: 'Corporate Memberships',
    membership_type: 'General Membership',
    membership_points: [
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_1: 'Buy For $600.99',
    membership_type_2: 'General Membership',
    point_title_2: [
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_2: 'Buy For $600.99',

    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
  {
    id: 3,
    bg_image: '/student_hero.jpeg',
    hero_heading: ' Student Membership',
    title: "Join the world's leading Quantum professional community",
    text: [
      'The membership will renew automatically after a year. Post your payment, your account will start receiving membership benefits. Membership once paid, shall not be refunded, You will be able to cancel the subscription anytime',
      'For more information or incase of any queries please drop a mail to neocosmicx@gmail.com',
    ],
    membership_name: 'Student Memberships',
    membership_type_1_image: '/student_section.jpeg',

    membership_type: 'General Membership',
    membership_points: [
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
      'Get recognized as the member of the premier global professional body.',
    ],
    membership_price_1: 'Buy For $600.99',
    faq: [
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
      {
        question: 'how long are your memberships? ',
        answer: 'we offer annual memberships only',
      },
    ],
  },
];
