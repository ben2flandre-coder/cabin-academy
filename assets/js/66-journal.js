/* Carnet de bord : trace des activités RÉELLES d'atelier (jamais les activités fictives de l'application). */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;
  const LEVELS = [
    { id: 'observe', label: 'Observé', help: 'Tu as regardé quelqu’un faire, sans réaliser toi-même.' },
    { id: 'aide', label: 'Réalisé avec aide', help: 'Tu as fait le geste, guidée pas à pas.' },
    { id: 'controle', label: 'Réalisé sous contrôle', help: 'Tu as fait seule, une personne a vérifié ton travail.' },
    { id: 'autonomie', label: 'Autonomie constatée', help: 'Mention validée par un tuteur : à choisir seulement si ton tuteur a constaté ton autonomie. Indique son nom.' },
  ];
  const levelLabel = id => (LEVELS.find(l => l.id === id) || LEVELS[0]).label;
  A.JOURNAL_LEVELS = LEVELS;
  const MENTION = 'Les activités fictives de l’application ne sont pas des expériences réalisées : ce carnet ne contient que ce que tu as réellement observé ou fait en atelier.';

  A.screens.carnet = args => {
    const editId = args[0] === 'modifier' ? args[1] : null;
    const entries = A.state.journal;
    const editing = editId ? entries.find(e => e.id === editId) : null;
    const nodes = [A.ui.head('Carnet de bord', { lead: 'Note ce que tu observes et réalises en atelier, avec ton niveau d’autonomie. Ce carnet t’aide à préparer tes entretiens avec ton tuteur.' }),
      h('p', { class: 'ca-mention', role: 'note' }, A.icon('info', { size: 20 }), h('span', null, MENTION))];
    if (editId && !editing) nodes.push(h('p', { class: 'ca-notice', role: 'status' }, 'Cette entrée n’existe plus (supprimée ou remplacée par un import).'));
    nodes.push(form(editing));
    nodes.push(listPanel());
    return { title: editing ? 'Carnet · modifier' : 'Carnet', node: h('div', { class: 'ca-page' }, nodes) };
  };

  function chapterOptions() {
    return [['', '— aucun —'], ...A.C.plan().map(p => [p.id, `${p.id.toUpperCase()} — ${p.title}${p.published ? '' : ' (à venir)'}`])];
  }

  function form(entry) {
    const d = entry || A.state.drafts.journal || {};
    const isDraft = !entry && !!A.state.drafts.journal;
    const date = h('input', { type: 'date', class: 'ca-input', required: true, value: A.isDay(d.date) ? d.date : A.today(), max: '2100-12-31' });
    const ch = A.ui.select(chapterOptions(), d.ch || '');
    const zone = h('input', { type: 'text', class: 'ca-input', maxlength: 200, value: d.zone || '', placeholder: 'Ex. : rangées 10 à 14, côté droit' });
    const task = h('input', { type: 'text', class: 'ca-input', maxlength: 200, required: true, value: d.task || '', placeholder: 'Ex. : pose de panneaux dado' });
    const lv = 'lv' + A.uid();
    const levelInputs = LEVELS.map(l => h('input', { type: 'radio', name: lv, value: l.id, class: 'ca-opt-in', checked: (d.level || 'observe') === l.id }));
    const levels = h('fieldset', { class: 'ca-opts is-compact' }, h('legend', null, 'Niveau'), h('ul', null, LEVELS.map((l, i) => h('li', { class: 'ca-opt' }, h('label', { class: 'ca-opt-l' }, levelInputs[i], h('span', { class: 'ca-opt-box', 'aria-hidden': 'true' }), h('span', { class: 'ca-opt-t' }, h('strong', null, l.label), h('br'), h('span', { class: 'ca-small ca-muted' }, l.help)))))));
    const notes = h('textarea', { class: 'ca-input', rows: 4, maxlength: 6000 }, d.notes || '');
    const tutor = h('input', { type: 'text', class: 'ca-input', maxlength: 200, value: d.tutor || '', autocomplete: 'off' });
    const msg = h('div', { class: 'ca-ex-msg', role: 'alert' });
    const save = h('button', { type: 'submit', class: 'ca-btn is-primary' }, A.icon('check'), h('span', null, entry ? 'Enregistrer les modifications' : 'Ajouter au carnet'));
    const cancel = entry ? A.ui.btn('Annuler', { href: '#/carnet' }, 'x') : (isDraft ? h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'jdraftclear' } }, A.icon('x'), h('span', null, 'Effacer le brouillon')) : null);
    const f = h('form', { class: 'ca-card ca-jform', novalidate: true, 'aria-labelledby': 'jf-h' },
      h('h2', { id: 'jf-h' }, entry ? 'Modifier une entrée' : 'Nouvelle entrée'),
      isDraft ? h('p', { class: 'ca-hint' }, 'Brouillon retrouvé : ta saisie précédente a été conservée.') : null,
      A.ui.field('Date', date),
      A.ui.field('Tâche (obligatoire)', task),
      A.ui.field('Zone / équipement', zone),
      A.ui.field('Chapitre lié', ch, 'Facultatif : le chapitre de l’application qui correspond à cette tâche.'),
      levels,
      A.ui.field('Tuteur ou tutrice', tutor, 'Facultatif, sauf pour « Autonomie constatée ».'),
      A.ui.field('Notes', notes, 'Ce qui s’est bien passé, ce qui a posé problème, les questions à poser.'),
      msg, h('div', { class: 'ca-row' }, save, cancel));
    const read = () => ({ date: date.value, ch: ch.value, zone: zone.value.trim(), task: task.value.trim(), level: (levelInputs.find(i => i.checked) || {}).value || 'observe', notes: notes.value, tutor: tutor.value.trim() });
    if (!entry) {
      let dirty = false;
      const saveDraft = () => {
        if (!dirty || f.dataset.saved) return;
        dirty = false;
        const v = read();
        if (v.task || v.zone || v.notes.trim() || v.tutor) { A.state.drafts.journal = Object.assign({}, v, { id: '' }); A.store.save(); }
      };
      const draft = A.debounce(saveDraft, 500);
      const mark = () => { dirty = true; draft(); };
      f.addEventListener('input', mark);
      f.addEventListener('change', mark);
      A.router.onSave(() => { draft.cancel(); saveDraft(); });
    }
    f.addEventListener('submit', ev => {
      ev.preventDefault();
      const v = read();
      const errs = [];
      if (!A.isDay(v.date)) errs.push('Indique une date valide.');
      if (!v.task) errs.push('Décris la tâche (champ obligatoire).');
      if (v.level === 'autonomie' && !v.tutor) errs.push('« Autonomie constatée » doit être validée par un tuteur : indique son nom, ou choisis un autre niveau.');
      if (errs.length) {
        A.replace(msg, h('ul', null, errs.map(e => h('li', null, e))));
        msg.classList.add('is-warn');
        A.focus(!A.isDay(v.date) ? date : !v.task ? task : tutor);
        return;
      }
      const t = new Date().toISOString();
      f.dataset.saved = '1';
      if (entry) {
        const e = A.state.journal.find(x => x.id === entry.id);
        if (e) Object.assign(e, v, { updated: t });
        else A.state.journal.unshift(Object.assign({ id: A.uid(), created: t, updated: t }, v));
      } else {
        A.state.journal.unshift(Object.assign({ id: A.uid(), created: t, updated: t }, v));
        delete A.state.drafts.journal;
      }
      A.store.save(); A.store.flush();
      A.notify(entry ? 'Entrée modifiée.' : 'Entrée ajoutée au carnet.', 'ok');
      if (entry) A.router.go('#/carnet'); else A.router.render();
    });
    return f;
  }
  A.actions.jdraftclear = () => { delete A.state.drafts.journal; A.store.save(); A.router.render(); };

  function listPanel() {
    const all = A.state.journal;
    const q = h('input', { type: 'search', class: 'ca-input', placeholder: 'Rechercher dans le carnet', autocomplete: 'off' });
    const lv = A.ui.select([['', 'Tous les niveaux'], ...LEVELS.map(l => [l.id, l.label])], '');
    const list = h('ul', { class: 'ca-journal' });
    const count = h('p', { class: 'ca-hint', 'aria-live': 'polite' });
    const draw = () => {
      const n = A.norm(q.value);
      const items = all.filter(e => (!lv.value || e.level === lv.value) && (!n || [e.task, e.zone, e.notes, e.tutor, e.ch].some(x => A.norm(x).includes(n))))
        .slice().sort((a, b) => b.date.localeCompare(a.date) || b.created.localeCompare(a.created));
      count.textContent = `${A.count(items.length, 'entrée', 'entrées')}${items.length !== all.length ? ` sur ${all.length}` : ''}.`;
      A.replace(list, items.map(e => h('li', { class: 'ca-jentry' },
        h('p', { class: 'ca-jentry-top' }, h('strong', null, A.fmtDay(e.date)), h('span', { class: 'ca-status is-lv-' + e.level }, levelLabel(e.level))),
        h('p', { class: 'ca-jentry-t' }, e.task),
        e.zone ? h('p', { class: 'ca-small' }, 'Zone : ', e.zone) : null,
        e.ch ? h('p', { class: 'ca-small' }, 'Chapitre : ', A.C.chapter(e.ch) ? h('a', { href: '#/chapitre/' + e.ch }, `${e.ch.toUpperCase()} — ${A.C.title(e.ch)}`) : `${e.ch.toUpperCase()} — ${A.C.title(e.ch)}`) : null,
        e.tutor ? h('p', { class: 'ca-small' }, 'Tuteur : ', e.tutor) : null,
        e.notes ? h('p', { class: 'ca-jentry-n' }, e.notes) : null,
        h('div', { class: 'ca-row' },
          A.ui.btn('Modifier', { href: '#/carnet/modifier/' + encodeURIComponent(e.id), class: 'is-small', 'aria-label': `Modifier l’entrée du ${A.fmtDay(e.date)} : ${e.task}` }, 'edit'),
          h('button', { type: 'button', class: 'ca-btn is-small is-danger-ghost', dataset: { act: 'jdel', id: e.id }, 'aria-label': `Supprimer l’entrée du ${A.fmtDay(e.date)} : ${e.task}` }, A.icon('trash'), h('span', null, 'Supprimer'))))));
      if (!items.length) list.appendChild(h('li', { class: 'ca-empty-li' }, all.length ? 'Aucune entrée ne correspond à ce filtre.' : 'Ton carnet est vide. Ajoute ta première activité d’atelier avec le formulaire ci-dessus.'));
    };
    q.addEventListener('input', A.debounce(draw, 150));
    lv.addEventListener('change', draw);
    draw();
    return A.ui.card(null, h('h2', null, 'Mes entrées'),
      all.length ? h('div', { class: 'ca-filters' }, A.ui.field('Rechercher', q), A.ui.field('Niveau', lv)) : null,
      count, list,
      all.length ? h('div', { class: 'ca-row' }, h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'jcsv' } }, A.icon('download'), h('span', null, 'Exporter en CSV (tableur)')),
        h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'jjson' } }, A.icon('download'), h('span', null, 'Exporter en JSON'))) : null);
  }
  A.actions.jdel = async el => {
    const e = A.state.journal.find(x => x.id === el.dataset.id);
    if (!e) return;
    const ok = await A.confirm({ title: 'Supprimer cette entrée ?', text: [`${A.fmtDay(e.date)} — ${e.task}`, 'La suppression est définitive (une sauvegarde automatique est faite juste avant).'], ok: 'Supprimer', danger: true });
    if (!ok) return;
    A.store.backup('avant suppression d’une entrée du carnet');
    A.state.journal = A.state.journal.filter(x => x.id !== e.id);
    A.store.save(); A.store.flush();
    A.notify('Entrée supprimée.');
    A.router.render();
  };
  A.actions.jcsv = () => {
    const rows = [['Date', 'Chapitre', 'Zone / équipement', 'Tâche', 'Niveau', 'Tuteur', 'Notes']];
    for (const e of A.state.journal.slice().sort((a, b) => a.date.localeCompare(b.date))) rows.push([e.date, e.ch ? `${e.ch.toUpperCase()} — ${A.C.title(e.ch)}` : '', e.zone, e.task, levelLabel(e.level), e.tutor, e.notes]);
    rows.push([]); rows.push([MENTION]);
    A.download(`carnet-rmbd-${A.today()}.csv`, 'text/csv;charset=utf-8', A.csv(rows));
    A.notify('Carnet exporté en CSV.');
  };
  A.actions.jjson = () => {
    const data = { app: A.store.APP_ID, kind: 'carnet', exportedAt: new Date().toISOString(), mention: MENTION, entries: A.state.journal };
    A.download(`carnet-rmbd-${A.today()}.json`, 'application/json', JSON.stringify(data, null, 1));
    A.notify('Carnet exporté en JSON.');
  };
})();
