(() => {
  'use strict';

  const username = 'Mirnamu';
  const themeButton = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const updateThemeLabel = () => {
    const isDark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', isDark ? '밝은 테마로 전환' : '어두운 테마로 전환');
    themeButton.title = isDark ? '밝은 테마로 전환' : '어두운 테마로 전환';
  };

  themeButton.hidden = false;
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('mirnamu-theme', root.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  const grid = document.querySelector('#project-grid');
  const status = document.querySelector('#project-status');
  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  function projectCard(repo) {
    const isWebsite = repo.name.toLowerCase() === `${username.toLowerCase()}.github.io`;
    const card = makeElement('article', 'project-card');
    const top = makeElement('div', 'card-top');
    const symbol = makeElement('span', 'code-symbol', '</>');
    symbol.setAttribute('aria-hidden', 'true');
    top.append(makeElement('span', 'project-type', isWebsite ? 'PERSONAL WEBSITE' : 'PUBLIC REPOSITORY'), symbol);

    const heading = makeElement('h3');
    const link = makeElement('a', '', repo.name);
    // Build links from the fixed account and encoded repository name, never API HTML.
    link.href = `https://github.com/${username}/${encodeURIComponent(repo.name)}`;
    heading.append(link);
    const description = repo.description || (isWebsite
      ? '개인 소개와 공개 프로젝트를 담은 이 포트폴리오의 소스 코드입니다.'
      : '프로젝트의 코드와 자세한 내용은 GitHub 저장소에서 확인할 수 있습니다.');
    const meta = makeElement('div', 'card-meta');
    meta.append(makeElement('span', '', isWebsite ? 'HTML · CSS · JavaScript' : (repo.language || 'GitHub 프로젝트')));
    const updated = new Date(repo.pushed_at || repo.updated_at);
    if (!Number.isNaN(updated.getTime())) {
      const time = makeElement('time', '', new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Seoul'
      }).format(updated));
      time.dateTime = updated.toISOString();
      time.title = '최근 코드 업데이트';
      meta.append(time);
    }
    card.append(top, heading, makeElement('p', '', description), meta);
    return card;
  }

  async function loadProjects() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    grid.setAttribute('aria-busy', 'true');
    status.hidden = false;
    status.textContent = '공개 프로젝트를 불러오는 중입니다.';
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) throw new Error(`GitHub HTTP ${response.status}`);
      const repos = await response.json();
      if (!Array.isArray(repos)) throw new Error('Unexpected repository response');
      const projects = repos.filter(repo => !repo.fork && !repo.archived && !repo.private && typeof repo.name === 'string').slice(0, 6);
      if (projects.length) {
        const fragment = document.createDocumentFragment();
        projects.forEach(repo => fragment.append(projectCard(repo)));
        grid.replaceChildren(fragment);
        status.textContent = `공개 프로젝트 ${projects.length}개를 표시합니다.`;
        status.classList.add('sr-only');
      } else {
        status.textContent = '공개 프로젝트를 준비하고 있습니다. 먼저 이 사이트의 코드를 둘러보세요.';
      }
    } catch (_) {
      status.textContent = '지금은 최신 목록을 불러올 수 없습니다. 전체 프로젝트는 위의 GitHub 링크에서 확인해 주세요.';
    } finally {
      clearTimeout(timeout);
      grid.setAttribute('aria-busy', 'false');
    }
  }

  loadProjects();
})();
