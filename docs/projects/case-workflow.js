(() => {
  const host = document.querySelector('.case-wrap > .case-section')?.parentElement;
  if (!host) return;
  const panels = [...host.querySelectorAll(':scope > .case-section')];
  if (!panels.length) return;
  const workspace = document.createElement('section');
  workspace.className = 'case-workflow';
  workspace.setAttribute('aria-label', '项目工作流程');
  workspace.innerHTML = `<aside class="workflow-sidebar"><p class="workflow-eyebrow">PROJECT WORKFLOW</p><div class="workflow-tabs" role="tablist" aria-label="工作阶段" aria-orientation="vertical"></div><p class="workflow-note">从需求与执行到反馈复盘，按步骤浏览完整项目。</p></aside><div class="workflow-main"><header class="workflow-heading"><span class="workflow-status" aria-live="polite"></span><label><input type="checkbox" class="workflow-all"> 完整阅读</label></header><div class="workflow-content"></div><nav class="workflow-pager" aria-label="流程翻页"><button type="button" class="workflow-prev">← 上一步</button><span></span><button type="button" class="workflow-next">下一步 →</button></nav></div>`;
  host.insertBefore(workspace, panels[0]);
  const list = workspace.querySelector('.workflow-tabs');
  const content = workspace.querySelector('.workflow-content');
  const prev = workspace.querySelector('.workflow-prev');
  const next = workspace.querySelector('.workflow-next');
  const all = workspace.querySelector('.workflow-all');
  const number = i => String(i + 1).padStart(2, '0');
  let active = 0;
  panels.forEach((panel, i) => {
    panel.id ||= `workflow-panel-${i}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `workflow-tab-${i}`);
    const button = document.createElement('button');
    button.type = 'button'; button.id = `workflow-tab-${i}`;
    button.setAttribute('role', 'tab');button.setAttribute('aria-controls', panel.id);
    button.innerHTML = `<span>${number(i)}</span><strong>${panel.querySelector('h2').textContent}</strong><span aria-hidden="true">↗</span>`;
    button.addEventListener('click', () => select(i, true));
    button.addEventListener('keydown', e => {
      const delta = ['ArrowDown','ArrowRight'].includes(e.key) ? 1 : ['ArrowUp','ArrowLeft'].includes(e.key) ? -1 : 0;
      if (delta) {e.preventDefault(); const index = (active + delta + panels.length) % panels.length; select(index, false);buttons[index].focus();}
    });
    list.append(button);content.append(panel);
  });
  const buttons = [...list.children];
  function select(index, scroll) {
    active = index;
    panels.forEach((p,i) => p.hidden = !all.checked && i !== index);
    buttons.forEach((b,i) => {b.setAttribute('aria-selected',String(i === index));b.tabIndex=i === index ? 0 : -1;});
    workspace.querySelector('.workflow-status').textContent = `${number(index)} / ${String(panels.length).padStart(2,'0')}  ${panels[index].querySelector('h2').textContent}`;
    prev.disabled = index === 0;next.disabled = index === panels.length - 1;
    next.textContent = index < panels.length - 1 ? `下一步：${panels[index+1].querySelector('h2').textContent} →` : '已阅读到最后一步';
    workspace.querySelector('.workflow-pager > span').textContent=`${number(index)} / ${String(panels.length).padStart(2,'0')}`;
    if (scroll) (all.checked ? panels[index] : workspace).scrollIntoView({behavior:'smooth',block:'start'});
  }
  prev.addEventListener('click',()=>select(Math.max(0,active-1),true));
  next.addEventListener('click',()=>select(Math.min(panels.length-1,active+1),true));
  all.addEventListener('change',()=>select(active,false));
  select(0,false);
})();
