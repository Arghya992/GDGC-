// Member Data
const members = [
  {
    id: "1",
    name: "Aarav Sharma",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    role: "Lead",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    bio: "Full-stack developer passionate about building scalable web applications. Love mentoring and sharing knowledge with the community.",
    location: "Bhopal",
    socials: { github: "https://github.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "2",
    name: "Priya Patel",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    role: "Core Member",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    bio: "Mobile app enthusiast with a keen eye for design. Building beautiful and intuitive user experiences is my passion.",
    location: "Mumbai",
    socials: { github: "https://github.com", twitter: "https://twitter.com" }
  },
  {
    id: "3",
    name: "Rohan Gupta",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    role: "Core Member",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Science"],
    bio: "AI/ML engineer exploring the frontiers of artificial intelligence. Passionate about using technology to solve real-world problems.",
    location: "Delhi",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "4",
    name: "Ananya Singh",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    role: "Member",
    skills: ["Android", "Kotlin", "Jetpack Compose", "Room"],
    bio: "Android developer building native applications. Love creating smooth animations and delightful user interactions.",
    location: "Bangalore",
    socials: { github: "https://github.com" }
  },
  {
    id: "5",
    name: "Vikram Reddy",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    role: "Core Member",
    skills: ["Cloud", "AWS", "Docker", "Kubernetes"],
    bio: "DevOps engineer automating everything. Believer in infrastructure as code and continuous deployment practices.",
    location: "Hyderabad",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
  },
  {
    id: "6",
    name: "Meera Krishnan",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    role: "Member",
    skills: ["Vue.js", "Nuxt", "GraphQL", "PostgreSQL"],
    bio: "Frontend specialist with backend knowledge. Creating seamless web experiences with modern frameworks.",
    location: "Chennai",
    socials: { github: "https://github.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "7",
    name: "Arjun Nair",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    role: "Lead",
    skills: ["Blockchain", "Solidity", "Web3", "Ethereum"],
    bio: "Web3 developer exploring decentralized applications. Building the future of the internet one smart contract at a time.",
    location: "Pune",
    socials: { twitter: "https://twitter.com", github: "https://github.com" }
  },
  {
    id: "8",
    name: "Kavya Menon",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    role: "Member",
    skills: ["Angular", "RxJS", "NgRx", "Sass"],
    bio: "Enterprise application developer with expertise in Angular ecosystem. Creating robust and maintainable codebases.",
    location: "Bhopal",
    socials: { linkedin: "https://linkedin.com" }
  }
];

const roles = ["All", "Lead", "Core Member", "Member"];
const allSkills = [...new Set(members.flatMap(m => m.skills))];
const locations = ["All", ...new Set(members.map(m => m.location))];

// SVG Icons
const icons = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
};

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let searchQuery = '';
let selectedRole = 'All';
let selectedSkill = 'All';
let selectedLocation = 'All';

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const app = document.getElementById('app');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('search-input');
const roleFilter = document.getElementById('role-filter');
const skillFilter = document.getElementById('skill-filter');
const locationFilter = document.getElementById('location-filter');
const clearBtn = document.getElementById('clear-btn');
const resultsCount = document.getElementById('results-count');
const memberGrid = document.getElementById('member-grid');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(currentTheme);

  // Populate filter options
  populateFilters();

  // Hide splash screen after animation
  setTimeout(() => {
    splashScreen.classList.add('hidden');
  }, 3000);

  // Render members
  renderMembers();

  // Event listeners
  themeToggle.addEventListener('click', toggleTheme);
  searchInput.addEventListener('input', handleSearch);
  roleFilter.addEventListener('change', handleRoleChange);
  skillFilter.addEventListener('change', handleSkillChange);
  locationFilter.addEventListener('change', handleLocationChange);
  clearBtn.addEventListener('click', clearFilters);
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
  currentTheme = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

function populateFilters() {
  // Role filter
  roles.forEach(role => {
    const option = document.createElement('option');
    option.value = role;
    option.textContent = role;
    roleFilter.appendChild(option);
  });

  // Skill filter
  const defaultSkill = document.createElement('option');
  defaultSkill.value = 'All';
  defaultSkill.textContent = 'All Skills';
  skillFilter.appendChild(defaultSkill);
  allSkills.forEach(skill => {
    const option = document.createElement('option');
    option.value = skill;
    option.textContent = skill;
    skillFilter.appendChild(option);
  });

  // Location filter
  locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location === 'All' ? 'All Locations' : location;
    locationFilter.appendChild(option);
  });
}

function handleSearch(e) {
  searchQuery = e.target.value;
  renderMembers();
  updateClearButton();
}

function handleRoleChange(e) {
  selectedRole = e.target.value;
  renderMembers();
  updateClearButton();
}

function handleSkillChange(e) {
  selectedSkill = e.target.value;
  renderMembers();
  updateClearButton();
}

function handleLocationChange(e) {
  selectedLocation = e.target.value;
  renderMembers();
  updateClearButton();
}

function clearFilters() {
  searchQuery = '';
  selectedRole = 'All';
  selectedSkill = 'All';
  selectedLocation = 'All';

  searchInput.value = '';
  roleFilter.value = 'All';
  skillFilter.value = 'All';
  locationFilter.value = 'All';

  renderMembers();
  updateClearButton();
}

function updateClearButton() {
  const hasFilters = searchQuery || selectedRole !== 'All' || selectedSkill !== 'All' || selectedLocation !== 'All';
  clearBtn.classList.toggle('hidden', !hasFilters);
}

function getFilteredMembers() {
  return members.filter(member => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery ||
      member.name.toLowerCase().includes(searchLower) ||
      member.bio.toLowerCase().includes(searchLower);

    const matchesRole = selectedRole === 'All' || member.role === selectedRole;
    const matchesSkill = selectedSkill === 'All' || member.skills.includes(selectedSkill);
    const matchesLocation = selectedLocation === 'All' || member.location === selectedLocation;

    return matchesSearch && matchesRole && matchesSkill && matchesLocation;
  });
}

function renderMembers() {
  const filtered = getFilteredMembers();

  // Update results count
  resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${members.length}</strong> members`;

  // Render cards
  if (filtered.length === 0) {
    memberGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${icons.users}</div>
        <h3>No Members Found</h3>
        <p>Try adjusting your search or filters to find team members.</p>
      </div>
    `;
    return;
  }

  memberGrid.innerHTML = filtered.map((member, index) => createMemberCard(member, index)).join('');
}

function createMemberCard(member, index) {
  const roleClass = member.role.toLowerCase().replace(' ', '-');

  const socialLinks = [];
  if (member.socials?.github) {
    socialLinks.push(`<a href="${member.socials.github}" target="_blank" rel="noopener noreferrer" class="social-link">${icons.github}</a>`);
  }
  if (member.socials?.linkedin) {
    socialLinks.push(`<a href="${member.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">${icons.linkedin}</a>`);
  }
  if (member.socials?.twitter) {
    socialLinks.push(`<a href="${member.socials.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">${icons.twitter}</a>`);
  }

  return `
    <div class="member-card" style="animation-delay: ${index * 100}ms">
      <div class="card-content">
        <div class="profile-section">
          <div class="avatar-wrapper">
            <img src="${member.photo}" alt="${member.name}" class="avatar" loading="lazy">
            <div class="online-indicator"></div>
          </div>
          <div class="profile-info">
            <h3 class="member-name">${member.name}</h3>
            <span class="role-badge ${roleClass}">${member.role}</span>
            <div class="location">
              ${icons.mapPin}
              <span>${member.location}</span>
            </div>
          </div>
        </div>
        <p class="bio">${member.bio}</p>
        <div class="skills">
          ${member.skills.slice(0, 4).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
        </div>
        ${socialLinks.length > 0 ? `<div class="social-links">${socialLinks.join('')}</div>` : ''}
      </div>
    </div>
  `;
}
