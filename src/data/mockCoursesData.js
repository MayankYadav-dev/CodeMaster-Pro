import { Code, Database, Smartphone, Palette, Shield, Brain, Cpu, Camera, Globe, BarChart3, Briefcase, Music, PenTool } from 'lucide-react';

// Featured courses for homepage
export const featuredCourses = [
  {
    title: 'Full Stack JavaScript',
    description: 'Master modern web development with React, Node.js, and MongoDB',
    duration: '12 weeks',
    students: '15,420',
    rating: '4.9',
    price: '$299',
    icon: <Code className="w-12 h-12" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    level: 'Intermediate'
  },
  {
    title: 'Python for Data Science',
    description: 'Learn Python, pandas, NumPy, and machine learning fundamentals',
    duration: '10 weeks',
    students: '12,830',
    rating: '4.8',
    price: '$249',
    icon: <Database className="w-12 h-12" />,
    tags: ['Python', 'Pandas', 'ML'],
    level: 'Beginner'
  },
  {
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native and Flutter',
    duration: '14 weeks',
    students: '9,240',
    rating: '4.9',
    price: '$349',
    icon: <Smartphone className="w-12 h-12" />,
    tags: ['React Native', 'Flutter'],
    level: 'Advanced'
  }
];

// All courses for the complete listing page
export const allCourses = [
  {
    title: 'Full Stack JavaScript',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
    duration: '12 weeks',
    students: '15,420',
    rating: '4.9',
    price: '$299',
    icon: <Code className="w-12 h-12" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    level: 'Intermediate',
    category: 'Web Development'
  },
  {
    title: 'Python for Data Science',
    description: 'Learn Python, pandas, NumPy, and machine learning fundamentals. Analyze real datasets and build predictive models.',
    duration: '10 weeks',
    students: '12,830',
    rating: '4.8',
    price: '$249',
    icon: <Database className="w-12 h-12" />,
    tags: ['Python', 'Pandas', 'ML'],
    level: 'Beginner',
    category: 'Data Science'
  },
  {
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native and Flutter. Deploy to app stores and monetize your apps.',
    duration: '14 weeks',
    students: '9,240',
    rating: '4.9',
    price: '$349',
    icon: <Smartphone className="w-12 h-12" />,
    tags: ['React Native', 'Flutter'],
    level: 'Advanced',
    category: 'Mobile Development'
  },
  {
    title: 'UI/UX Design Mastery',
    description: 'Create stunning user interfaces and experiences. Learn Figma, design systems, and user research methodologies.',
    duration: '8 weeks',
    students: '8,650',
    rating: '4.7',
    price: '$199',
    icon: <Palette className="w-12 h-12" />,
    tags: ['Figma', 'Design Systems', 'UX Research'],
    level: 'Beginner',
    category: 'Design'
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Protect systems and networks from cyber threats. Learn ethical hacking, penetration testing, and security protocols.',
    duration: '16 weeks',
    students: '6,430',
    rating: '4.8',
    price: '$399',
    icon: <Shield className="w-12 h-12" />,
    tags: ['Ethical Hacking', 'Network Security', 'CISSP'],
    level: 'Intermediate',
    category: 'Cybersecurity'
  },
  {
    title: 'Machine Learning & AI',
    description: 'Dive deep into artificial intelligence and machine learning algorithms. Build intelligent systems and neural networks.',
    duration: '18 weeks',
    students: '11,250',
    rating: '4.9',
    price: '$449',
    icon: <Brain className="w-12 h-12" />,
    tags: ['TensorFlow', 'PyTorch', 'Neural Networks'],
    level: 'Advanced',
    category: 'AI/ML'
  },
  {
    title: 'Cloud Computing with AWS',
    description: 'Master Amazon Web Services and cloud architecture. Deploy scalable applications and manage cloud infrastructure.',
    duration: '12 weeks',
    students: '9,840',
    rating: '4.6',
    price: '$329',
    icon: <Cpu className="w-12 h-12" />,
    tags: ['AWS', 'EC2', 'Lambda'],
    level: 'Intermediate',
    category: 'Cloud Computing'
  },
  {
    title: 'Digital Photography',
    description: 'Capture stunning photos and master post-processing techniques. Learn composition, lighting, and advanced editing.',
    duration: '6 weeks',
    students: '5,670',
    rating: '4.5',
    price: '$149',
    icon: <Camera className="w-12 h-12" />,
    tags: ['Lightroom', 'Photoshop', 'Composition'],
    level: 'Beginner',
    category: 'Creative'
  },
  {
    title: 'DevOps Engineering',
    description: 'Streamline development and operations with CI/CD pipelines, Docker, Kubernetes, and automation tools.',
    duration: '14 weeks',
    students: '7,320',
    rating: '4.7',
    price: '$379',
    icon: <Globe className="w-12 h-12" />,
    tags: ['Docker', 'Kubernetes', 'Jenkins'],
    level: 'Advanced',
    category: 'DevOps'
  },
  {
    title: 'Business Analytics',
    description: 'Make data-driven business decisions using Excel, SQL, Tableau, and statistical analysis techniques.',
    duration: '10 weeks',
    students: '8,950',
    rating: '4.6',
    price: '$279',
    icon: <BarChart3 className="w-12 h-12" />,
    tags: ['Excel', 'SQL', 'Tableau'],
    level: 'Beginner',
    category: 'Business'
  },
  {
    title: 'Project Management Professional',
    description: 'Master project management methodologies including Agile, Scrum, and traditional PM approaches. Get PMP certified.',
    duration: '8 weeks',
    students: '6,780',
    rating: '4.4',
    price: '$229',
    icon: <Briefcase className="w-12 h-12" />,
    tags: ['PMP', 'Agile', 'Scrum'],
    level: 'Intermediate',
    category: 'Business'
  },
  {
    title: 'Music Production & Audio Engineering',
    description: 'Create professional music tracks and master audio engineering techniques using industry-standard software.',
    duration: '12 weeks',
    students: '4,560',
    rating: '4.8',
    price: '$299',
    icon: <Music className="w-12 h-12" />,
    tags: ['Logic Pro', 'Pro Tools', 'Mixing'],
    level: 'Intermediate',
    category: 'Creative'
  },
  {
    title: 'Graphic Design Fundamentals',
    description: 'Master visual communication through typography, color theory, and design principles using Adobe Creative Suite.',
    duration: '8 weeks',
    students: '7,890',
    rating: '4.5',
    price: '$189',
    icon: <PenTool className="w-12 h-12" />,
    tags: ['Illustrator', 'Photoshop', 'InDesign'],
    level: 'Beginner',
    category: 'Design'
  },
  {
    title: 'Advanced React Development',
    description: 'Master advanced React patterns, state management, performance optimization, and modern React ecosystem.',
    duration: '10 weeks',
    students: '9,120',
    rating: '4.9',
    price: '$319',
    icon: <Code className="w-12 h-12" />,
    tags: ['React', 'Redux', 'Next.js'],
    level: 'Advanced',
    category: 'Web Development'
  },
  {
    title: 'Blockchain Development',
    description: 'Build decentralized applications and smart contracts using Ethereum, Solidity, and Web3 technologies.',
    duration: '16 weeks',
    students: '3,450',
    rating: '4.7',
    price: '$499',
    icon: <Database className="w-12 h-12" />,
    tags: ['Solidity', 'Ethereum', 'Web3'],
    level: 'Advanced',
    category: 'Blockchain'
  },
  {
    title: 'Flutter Mobile Development',
    description: 'Create beautiful cross-platform mobile apps with Flutter and Dart. Build for iOS and Android simultaneously.',
    duration: '12 weeks',
    students: '6,890',
    rating: '4.6',
    price: '$289',
    icon: <Smartphone className="w-12 h-12" />,
    tags: ['Flutter', 'Dart', 'Firebase'],
    level: 'Intermediate',
    category: 'Mobile Development'
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Master online marketing techniques including SEO, social media marketing, content strategy, and analytics.',
    duration: '8 weeks',
    students: '11,200',
    rating: '4.5',
    price: '$199',
    icon: <BarChart3 className="w-12 h-12" />,
    tags: ['SEO', 'Social Media', 'Analytics'],
    level: 'Beginner',
    category: 'Marketing'
  },
  {
    title: 'Game Development with Unity',
    description: 'Create engaging 2D and 3D games using Unity engine and C#. Learn game design principles and monetization.',
    duration: '16 weeks',
    students: '5,430',
    rating: '4.7',
    price: '$359',
    icon: <Code className="w-12 h-12" />,
    tags: ['Unity', 'C#', 'Game Design'],
    level: 'Intermediate',
    category: 'Game Development'
  }
];

export const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Design', 'Cybersecurity', 'AI/ML', 'Cloud Computing', 'Creative', 'DevOps', 'Business', 'Blockchain', 'Marketing', 'Game Development'];

export const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];