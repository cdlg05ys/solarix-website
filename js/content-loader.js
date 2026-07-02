/**
 * Solarix Content Loader - Loads site.json and populates page content
 */
(function() {
  'use strict';

  var CONTENT_URL = '/content/site.json';

  function loadContent(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', CONTENT_URL, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          callback(JSON.parse(xhr.responseText));
        } catch(e) {
          console.error('Content parse error:', e);
        }
      }
    };
    xhr.send();
  }

  function setText(el, text) {
    if (el && text !== undefined) el.textContent = text;
  }
  function setHtml(el, html) {
    if (el && html !== undefined) el.innerHTML = html;
  }
  function setAttr(el, attr, val) {
    if (el && val !== undefined) el.setAttribute(attr, val);
  }

  // Populate page content from data
  function populate(data) {
    var g = data.global || {};
    var idx = data.index || {};
    var abt = data.about || {};
    var biz = data.business || {};
    var tch = data.tech || {};
    var ct = data.contact || {};

    // --- Global: all pages ---
    document.querySelectorAll('[data-c="company_name"]').forEach(function(el) { setText(el, g.company_name); });
    document.querySelectorAll('[data-c="company_full"]').forEach(function(el) { setText(el, g.company_full); });
    document.querySelectorAll('[data-c="email"]').forEach(function(el) { setText(el, g.email); });
    document.querySelectorAll('[data-c="address"]').forEach(function(el) { setText(el, g.address); });
    document.querySelectorAll('[data-c="work_hours"]').forEach(function(el) { setText(el, g.work_hours); });
    document.querySelectorAll('[data-c="copyright_year"]').forEach(function(el) { setText(el, g.copyright_year); });

    // --- Index ---
    setText(document.getElementById('hero-badge'), idx.hero_badge);
    setText(document.getElementById('hero-title-prefix'), idx.hero_title_prefix);
    setText(document.getElementById('hero-title-accent'), idx.hero_title_accent);
    setText(document.getElementById('hero-title-suffix'), idx.hero_title_suffix);
    setText(document.getElementById('hero-desc'), idx.hero_desc);
    setText(document.getElementById('stat1-num'), idx.stat1_num);
    setText(document.getElementById('stat1-label'), idx.stat1_label);
    setText(document.getElementById('stat2-num'), idx.stat2_num);
    setText(document.getElementById('stat2-label'), idx.stat2_label);
    setText(document.getElementById('stat3-num'), idx.stat3_num);
    setText(document.getElementById('stat3-label'), idx.stat3_label);
    setText(document.getElementById('stat4-num'), idx.stat4_num);
    setText(document.getElementById('stat4-label'), idx.stat4_label);

    // --- About ---
    setText(document.getElementById('about-tag'), abt.section_tag);
    setText(document.getElementById('about-title-prefix'), abt.section_title_prefix);
    setText(document.getElementById('about-title-hl'), abt.section_title_hl);
    setText(document.getElementById('about-subtitle'), abt.section_subtitle);
    setText(document.getElementById('about-desc'), abt.description);
    setText(document.getElementById('about-mission-title'), abt.mission_title);
    setText(document.getElementById('about-mission-desc'), abt.mission_desc);
    setText(document.getElementById('about-vision-title'), abt.vision_title);
    setText(document.getElementById('about-vision-desc'), abt.vision_desc);
    setText(document.getElementById('about-values-title'), abt.values_title);
    setText(document.getElementById('about-values-desc'), abt.values_desc);
    setText(document.getElementById('about-card-title'), abt.card_title);
    setText(document.getElementById('about-card-desc'), abt.card_desc);
    setText(document.getElementById('cert1'), abt.cert1);
    setText(document.getElementById('cert2'), abt.cert2);
    setText(document.getElementById('cert3'), abt.cert3);
    setText(document.getElementById('cert4'), abt.cert4);

    // --- Business ---
    setText(document.getElementById('biz-tag'), biz.section_tag);
    setText(document.getElementById('biz-title-prefix'), biz.section_title_prefix);
    setText(document.getElementById('biz-title-hl'), biz.section_title_hl);
    setText(document.getElementById('biz-subtitle'), biz.section_subtitle);
    setText(document.getElementById('biz1-title'), biz.biz1_title);
    setText(document.getElementById('biz1-desc'), biz.biz1_desc);
    setText(document.getElementById('biz2-title'), biz.biz2_title);
    setText(document.getElementById('biz2-desc'), biz.biz2_desc);
    setText(document.getElementById('biz3-title'), biz.biz3_title);
    setText(document.getElementById('biz3-desc'), biz.biz3_desc);
    setText(document.getElementById('biz4-title'), biz.biz4_title);
    setText(document.getElementById('biz4-desc'), biz.biz4_desc);
    setText(document.getElementById('biz5-title'), biz.biz5_title);
    setText(document.getElementById('biz5-desc'), biz.biz5_desc);
    setText(document.getElementById('biz6-title'), biz.biz6_title);
    setText(document.getElementById('biz6-desc'), biz.biz6_desc);
    setText(document.getElementById('charging-tag'), biz.charging_tag);
    setText(document.getElementById('charging-title-prefix'), biz.charging_title_prefix);
    setText(document.getElementById('charging-title-hl'), biz.charging_title_hl);
    setText(document.getElementById('charging-tech-title'), biz.charging_tech_title);
    setText(document.getElementById('charging-tech-1'), biz.charging_tech_1);
    setText(document.getElementById('charging-tech-2'), biz.charging_tech_2);
    setText(document.getElementById('charging-tech-3'), biz.charging_tech_3);
    setText(document.getElementById('charging-tech-4'), biz.charging_tech_4);
    setText(document.getElementById('charging-mgmt-title'), biz.charging_mgmt_title);
    setText(document.getElementById('charging-mgmt-desc'), biz.charging_mgmt_desc);
    setText(document.getElementById('advantage-tag'), biz.advantage_tag);
    setText(document.getElementById('advantage-title-prefix'), biz.advantage_title_prefix);
    setText(document.getElementById('advantage-title-hl'), biz.advantage_title_hl);
    setText(document.getElementById('adv1-title'), biz.adv1_title);
    setText(document.getElementById('adv1-1'), biz.adv1_1);
    setText(document.getElementById('adv1-2'), biz.adv1_2);
    setText(document.getElementById('adv1-3'), biz.adv1_3);
    setText(document.getElementById('adv1-4'), biz.adv1_4);
    setText(document.getElementById('adv1-5'), biz.adv1_5);
    setText(document.getElementById('adv1-6'), biz.adv1_6);
    setText(document.getElementById('adv2-title'), biz.adv2_title);
    setText(document.getElementById('adv2-1'), biz.adv2_1);
    setText(document.getElementById('adv2-2'), biz.adv2_2);
    setText(document.getElementById('adv2-3'), biz.adv2_3);
    setText(document.getElementById('adv2-4'), biz.adv2_4);
    setText(document.getElementById('adv3-title'), biz.adv3_title);
    setText(document.getElementById('adv3-1'), biz.adv3_1);
    setText(document.getElementById('adv3-2'), biz.adv3_2);
    setText(document.getElementById('adv4-title'), biz.adv4_title);
    setText(document.getElementById('adv4-1'), biz.adv4_1);
    setText(document.getElementById('adv4-2'), biz.adv4_2);
    setText(document.getElementById('adv4-3'), biz.adv4_3);
    setText(document.getElementById('adv4-4'), biz.adv4_4);

    // --- Tech ---
    setText(document.getElementById('tech-tag'), tch.section_tag);
    setText(document.getElementById('tech-title-prefix'), tch.section_title_prefix);
    setText(document.getElementById('tech-title-hl'), tch.section_title_hl);
    setText(document.getElementById('tech-subtitle'), tch.section_subtitle);
    setText(document.getElementById('tech1-title'), tch.tech1_title);
    setText(document.getElementById('tech1-desc'), tch.tech1_desc);
    setText(document.getElementById('tech2-title'), tch.tech2_title);
    setText(document.getElementById('tech2-desc'), tch.tech2_desc);
    setText(document.getElementById('tech3-title'), tch.tech3_title);
    setText(document.getElementById('tech3-desc'), tch.tech3_desc);
    setText(document.getElementById('tech4-title'), tch.tech4_title);
    setText(document.getElementById('tech4-desc'), tch.tech4_desc);
    setText(document.getElementById('tech5-title'), tch.tech5_title);
    setText(document.getElementById('tech5-desc'), tch.tech5_desc);
    setText(document.getElementById('patent-num'), tch.patent_num);
    setText(document.getElementById('patent-label'), tch.patent_label);
    setText(document.getElementById('tag1'), tch.tag1);
    setText(document.getElementById('tag2'), tch.tag2);
    setText(document.getElementById('tag3'), tch.tag3);
    setText(document.getElementById('tag4'), tch.tag4);
    setText(document.getElementById('tag5'), tch.tag5);
    setText(document.getElementById('tag6'), tch.tag6);

    // --- Contact ---
    setText(document.getElementById('contact-tag'), ct.section_tag);
    setText(document.getElementById('contact-title-prefix'), ct.section_title_prefix);
    setText(document.getElementById('contact-title-hl'), ct.section_title_hl);
    setText(document.getElementById('contact-subtitle'), ct.section_subtitle);
  }

  // Init
  if (document.querySelector('[data-c]') || document.getElementById('hero-desc') || document.getElementById('about-desc')) {
    loadContent(populate);
  }
})();
