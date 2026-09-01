/**
 * Intel Sustainability Timeline - JavaScript
 * Handles modal interactions, timeline scrolling, and accessibility
 */

/**
 * Milestone story data with full fact-checked content
 */
const storyData = {
  '1968': {
    year: '1968',
    title: 'Intel is founded',
    imageSrc: 'img/milestone-1968.jpg',
    imageAlt: 'Intel Corporation founding in 1968',
    story: 'Robert Noyce and Gordon Moore incorporated their new venture on July 18, 1968. The initial paperwork used the name N.M. Electronics, but the founders later selected Intel, a name derived from "integrated electronics." Intel began operations in August 1968 with about a dozen engineers and placed research and development at the center of its company culture.',
    sourceName: "Intel's Founding",
    sourceUrl: 'https://www.intel.com/content/www/us/en/history/virtual-vault/articles/intels-founding.html'
  },
  '1971': {
    year: '1971',
    title: 'The Intel 4004',
    imageSrc: 'img/milestone-1971.jpg',
    imageAlt: 'Intel 4004 microprocessor from 1971',
    story: 'The Intel 4004 began with a 1969 request from Japanese calculator company Busicom for a custom set of calculator chips. Intel engineers proposed a smaller four-chip design that included a programmable processor. The resulting 4004 was completed in 1971 and became the first general-purpose microprocessor. Its development involved Intel engineers Ted Hoff, Federico Faggin and Stan Mazor, along with Masatoshi Shima of Busicom.',
    sourceName: 'The Intel 4004',
    sourceUrl: 'https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-intel-4004.html'
  },
  '1978': {
    year: '1978',
    title: 'The 8086 arrives',
    imageSrc: 'img/milestone-1978.jpg',
    imageAlt: 'Intel 8086 processor from 1978',
    story: 'Intel introduced the 8086 microprocessor in 1978 after completing its development in approximately 18 months. Intel describes the processor as a major advance because it supported more demanding and flexible applications, and its architecture became a template for later processors. The Intel 8088, a variant of the 8086, was later selected as the processor for the IBM Personal Computer introduced in 1981.',
    sourceName: 'The Intel 8086 and the IBM PC',
    sourceUrl: 'https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-8086-and-the-ibm-pc.html'
  },
  '1985': {
    year: '1985',
    title: 'Raising the bar with the 386',
    imageSrc: 'img/milestone-1985.jpg',
    imageAlt: 'Intel 386 processor from 1985',
    story: 'Intel introduced the 80386, commonly called the 386, on October 17, 1985. The 32-bit processor contained approximately 275,000 transistors and initially operated at 16 megahertz. Intel\'s historical account states that it delivered more than twice the performance of the 286. The processor strengthened the x86 family and supported increasingly sophisticated personal computers and workstations.',
    sourceName: 'Raising the Bar with the 386',
    sourceUrl: 'https://timeline.intel.com/1985/raising-the-bar-with-the-386'
  },
  '2006': {
    year: '2006',
    title: 'Energy-efficient performance',
    imageSrc: 'img/milestone-2006.jpg',
    imageAlt: 'Intel Core microarchitecture from 2006',
    story: 'Intel began shipping processors based on its Intel Core microarchitecture in 2006. Intel\'s 2006 Corporate Responsibility Report described this architecture as an advance in energy-efficient performance. According to the report, Core 2 Duo desktop processors provided up to 40% more performance while being more than 40% more energy efficient than previous-generation Intel desktop processors. Intel also worked with industry organizations to promote more efficient computer power supplies.',
    sourceName: 'Intel 2006 Corporate Responsibility Report',
    sourceUrl: 'https://csrreportbuilder.intel.com/PDFfiles/archived_reports/Intel%202006%20CSR%20Report.pdf'
  },
  '2020': {
    year: '2020',
    title: 'The RISE strategy',
    imageSrc: 'img/milestone-2020.jpg',
    imageAlt: 'Intel RISE strategy launch in 2020',
    story: 'In 2020, Intel introduced its 2030 corporate responsibility strategy and goals. The RISE framework represents Responsible, Inclusive, Sustainable and Enabling. Intel stated that the strategy was intended to help create a more responsible, inclusive and sustainable world enabled through technology and employee expertise. It extended the company\'s goals beyond its own operations to include collaboration with suppliers, customers and other stakeholders.',
    sourceName: 'Intel 2019–2020 Corporate Responsibility Report',
    sourceUrl: 'https://csrreportbuilder.intel.com/PDFfiles/archived_reports/Intel-2019-20-CSR-Report.pdf'
  },
  '2022': {
    year: '2022',
    title: 'Net-zero operations by 2040',
    imageSrc: 'img/milestone-2022.jpg',
    imageAlt: 'Intel\'s net-zero commitment by 2040',
    story: 'On April 13, 2022, Intel announced a commitment to achieve net-zero greenhouse gas emissions across its global operations by 2040. The commitment covers Scope 1 emissions from Intel\'s operations and Scope 2 emissions associated with purchased energy. Intel also established interim actions for 2030, including pursuing 100% renewable electricity across global operations and investing in facility energy conservation.',
    sourceName: 'Intel\'s Net-Zero Operations Commitment',
    sourceUrl: 'https://download.intel.com/newsroom/archive/2025/en-us-2022-04-13-intel-commits-to-netzero-greenhouse-gas-emissions-in-its-global-operations-by-2040.pdf'
  },
  '2023': {
    year: '2023',
    title: '99% renewable electricity',
    imageSrc: 'img/milestone-2023.jpg',
    imageAlt: 'Intel reaches 99% renewable electricity in 2023',
    story: 'Intel\'s 2023–2024 Corporate Responsibility Report stated that the company used 99% renewable electricity globally during 2023. Intel achieved 100% renewable electricity at its locations in the United States, Europe, Malaysia, Vietnam and China and was approaching 100% in Costa Rica. The report also stated that Intel\'s absolute Scope 1 and Scope 2 greenhouse gas emissions decreased 43% from its 2019 baseline during that reporting period.',
    sourceName: 'Top Takeaways from Intel\'s Corporate Responsibility Report',
    sourceUrl: 'https://newsroom.intel.com/corporate/top-takeaways-intels-corporate-responsibility-report'
  },
  '2024': {
    year: '2024',
    title: 'Intel Sustainability Summit',
    imageSrc: 'img/milestone-2024.jpg',
    imageAlt: 'Intel\'s first Sustainability Summit in 2024',
    story: 'In March 2024, Intel and other sponsors convened more than 140 organizations for the inaugural global Intel Sustainability Summit. Participants included corporations, academic institutions, government representatives, nongovernmental organizations and industry groups. Discussion topics included sustainable manufacturing chemistry, standardized carbon-footprint methods and complementary roadmaps toward net-zero greenhouse gas emissions.',
    sourceName: 'Aligning Sustainability Across the Semiconductor Value Chain',
    sourceUrl: 'https://newsroom.intel.com/opinion/aligning-sustainability-efforts-across-the-semiconductor-value-chain'
  }
};

/**
 * Initialize timeline and modal functionality
 */
document.addEventListener('DOMContentLoaded', function () {
  initializeTimeline();
  initializeModal();
});

/**
 * Initialize timeline controls
 */
function initializeTimeline() {
  const prevButton = document.querySelector('.timeline-prev');
  const nextButton = document.querySelector('.timeline-next');
  const container = document.querySelector('.timeline-container');

  if (prevButton && container) {
    prevButton.addEventListener('click', function () {
      scrollTimeline(container, -400);
    });
  }

  if (nextButton && container) {
    nextButton.addEventListener('click', function () {
      scrollTimeline(container, 400);
    });
  }
}

/**
 * Scroll timeline by specified amount
 * @param {Element} container - The timeline container
 * @param {number} amount - Amount to scroll
 */
function scrollTimeline(container, amount) {
  if (!container) return;
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

/**
 * Initialize modal functionality
 */
function initializeModal() {
  const modal = document.getElementById('story-modal');
  const closeButton = document.querySelector('.modal-close');
  const openButtons = document.querySelectorAll('.open-story-btn');

  if (!modal) return;

  // Attach click listeners to all "Open Full Story" buttons
  openButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const storyId = this.getAttribute('data-id');
      openStoryModal(modal, storyId, this);
    });
  });

  // Close button
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      closeStoryModal(modal);
    });
  }

  // Allow Escape key to close modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.open) {
      closeStoryModal(modal);
    }
  });

  // Allow backdrop click to close modal
  modal.addEventListener('click', function (e) {
    if (e.target === this) {
      closeStoryModal(modal);
    }
  });
}

/**
 * Open the story modal with specific story content
 * @param {HTMLDialogElement} modal - The modal element
 * @param {string} storyId - The story ID (year)
 * @param {HTMLElement} triggerButton - The button that opened the modal
 */
function openStoryModal(modal, storyId, triggerButton) {
  const data = storyData[storyId];

  if (!data) {
    console.warn('Story data not found for ID:', storyId);
    return;
  }

  // Populate modal content
  document.getElementById('modal-year').textContent = data.year;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-image').src = data.imageSrc;
  document.getElementById('modal-image').alt = data.imageAlt;
  document.getElementById('modal-story-text').textContent = data.story;

  const sourceLink = document.getElementById('modal-source-link');
  sourceLink.textContent = data.sourceName;
  sourceLink.href = data.sourceUrl;

  // Show the modal
  modal.showModal();

  // Store the trigger button for focus restoration
  modal.dataset.triggerButton = storyId;
  window.storyModalTrigger = triggerButton;

  // Move focus into the modal
  const closeButton = document.querySelector('.modal-close');
  if (closeButton) {
    closeButton.focus();
  }

  // Prevent background scroll
  document.body.style.overflow = 'hidden';
}

/**
 * Close the story modal
 * @param {HTMLDialogElement} modal - The modal element
 */
function closeStoryModal(modal) {
  if (!modal) return;

  modal.close();
  document.body.style.overflow = '';

  // Restore focus to the button that opened the modal
  if (window.storyModalTrigger) {
    window.storyModalTrigger.focus();
    window.storyModalTrigger = null;
  }
}

/**
 * Error handling
 */
window.addEventListener('error', function (event) {
  console.error('An error occurred:', event.error);
});

window.addEventListener('unhandledrejection', function (event) {
  console.error('Unhandled promise rejection:', event.reason);
});
