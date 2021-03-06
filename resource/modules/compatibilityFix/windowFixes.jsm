/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// VERSION 1.1.13

Modules.LOADMODULE = function() {
	toggleAttribute(document.documentElement, "FF51", Services.vc.compare(Services.appinfo.version, "51.0a1") >= 0);

	AddonManager.getAddonByID("{dc0fa13c-3dae-73eb-e852-912722c852f9}", function(addon) {
		Modules.loadIf('compatibilityFix/milewideback', (addon && addon.isActive));
	});

	AddonManager.getAddonByID("edgewise@software.donnapaul.net", function(addon) {
		Modules.loadIf('compatibilityFix/edgewise', (addon && addon.isActive));
	});

	AddonManager.getAddonByID("autopager@mozilla.org", function(addon) {
		Modules.loadIf('compatibilityFix/autoPager', (addon && addon.isActive));
	});

	AddonManager.getAddonByID("treestyletab@piro.sakura.ne.jp", function(addon) {
		Modules.loadIf('compatibilityFix/treestyletab', (addon && addon.isActive));
	});

	Modules.load('compatibilityFix/console');
	Modules.load('compatibilityFix/dmt');
	Modules.load('compatibilityFix/addonMgr');
	Modules.load('compatibilityFix/domi');
	Modules.load('compatibilityFix/scratchpad');
	Modules.load('compatibilityFix/pageInfo');
	Modules.load('compatibilityFix/downloadsIndicator');
	Modules.load('compatibilityFix/bookmarkedItem');
	Modules.load('compatibilityFix/puzzleToolbars');
	Modules.load('compatibilityFix/findbartweak');

	Modules.loadIf('compatibilityFix/RTL', RTL);
};

Modules.UNLOADMODULE = function() {
	Modules.unload('compatibilityFix/milewideback');
	Modules.unload('compatibilityFix/edgewise');
	Modules.unload('compatibilityFix/autoPager');
	Modules.unload('compatibilityFix/treestyletab');
	Modules.unload('compatibilityFix/console');
	Modules.unload('compatibilityFix/dmt');
	Modules.unload('compatibilityFix/addonMgr');
	Modules.unload('compatibilityFix/domi');
	Modules.unload('compatibilityFix/scratchpad');
	Modules.unload('compatibilityFix/pageInfo');
	Modules.unload('compatibilityFix/downloadsIndicator');
	Modules.unload('compatibilityFix/bookmarkedItem');
	Modules.unload('compatibilityFix/puzzleToolbars');
	Modules.unload('compatibilityFix/findbartweak');

	removeAttribute(document.documentElement, "FF51");

	if(UNLOADED) {
		Modules.unload('compatibilityFix/RTL');
	}
};
