/*!
 * VisualEditor MediaWiki Initialization MobileCollabTarget class.
 *
 * @copyright 2011-2016 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * MediaWiki mobile article target.
 *
 * @class
 * @extends ve.init.mw.Target
 *
 * @constructor
 * @param {mw.Title} title Page sub-title
 * @param {string} rebaserUrl Rebaser server URL
 * @param {Object} [config] Configuration options
 * @cfg {mw.Title} [importTitle] Title to import
 */
ve.init.mw.MobileCollabTarget = function VeInitMwMobileCollabTarget( title, rebaserUrl, config ) {
	// Parent constructor
	ve.init.mw.MobileCollabTarget.super.call( this, title, rebaserUrl, config );

	// Initialization
	this.$element.addClass( 've-init-mw-mobileArticleTarget ve-init-mw-mobileCollabTarget' );

	$( document.body ).removeClass( 'ns-special' );
};

/* Inheritance */

OO.inheritClass( ve.init.mw.MobileCollabTarget, ve.init.mw.CollabTarget );

/* Static Properties */

ve.init.mw.MobileCollabTarget.static.toolbarGroups = [
	// History
	{
		name: 'history',
		include: [ 'undo' ]
	},
	// Style
	{
		name: 'style',
		classes: [ 've-test-toolbar-style' ],
		type: 'list',
		icon: 'textStyle',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-style-tooltip' ),
		include: [ { group: 'textStyle' }, 'language', 'clear' ],
		forceExpand: [ 'bold', 'italic', 'clear' ],
		promote: [ 'bold', 'italic' ],
		demote: [ 'strikethrough', 'code', 'underline', 'language', 'clear' ]
	},
	// Link
	{
		name: 'link',
		include: [ 'link' ]
	},
	{
		name: 'commentAnnotation',
		include: [ 'commentAnnotation' ]
	},
	// Placeholder for reference tools (e.g. Cite and/or Citoid)
	{
		name: 'reference'
	},
	{
		name: 'insert',
		header: OO.ui.deferMsg( 'visualeditor-toolbar-insert' ),
		title: OO.ui.deferMsg( 'visualeditor-toolbar-insert' ),
		type: 'list',
		icon: 'add',
		label: '',
		include: '*',
		exclude: [ 'comment', 'indent', 'outdent', { group: 'format' } ]
	}
	// "Done" tool is added in setupToolbar as it not part of the
	// standard config (i.e. shouldn't be inhertied by TargetWidget)
];

ve.init.mw.MobileCollabTarget.static.actionGroups = [
	{
		name: 'authorList',
		include: [ 'authorList' ]
	},
	{
		name: 'export',
		include: [ 'export' ]
	}
];

/* Methods */

/**
 * @inheritdoc
 */
ve.init.mw.MobileCollabTarget.prototype.setSurface = function ( surface ) {
	surface.$element.addClass( 'content' );

	// Parent method
	ve.init.mw.MobileCollabTarget.super.prototype.setSurface.apply( this, arguments );
};

/* Registration */

ve.init.mw.targetFactory.register( ve.init.mw.MobileCollabTarget );
