/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-multi-selectable.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="iron-selectable.d.ts" />

declare namespace Polymer {

  interface IronMultiSelectableBehavior extends Polymer.IronSelectableBehavior {

    /**
     *  UNUSED, FOR API COMPATIBILITY
     */
    readonly _shouldUpdateSelection: any;

    /**
     * If true, multiple selections are allowed.
     */
    multi: boolean|null|undefined;

    /**
     * Gets or sets the selected elements. This is used instead of `selected` when `multi`
     * is true.
     */
    selectedValues: any[]|null|undefined;

    /**
     * Returns an array of currently selected items.
     */
    readonly selectedItems: any[]|null|undefined;

    /**
     * Selects the given value. If the `multi` property is true, then the selected state of the
     * `value` will be toggled; otherwise the `value` will be selected.
     *
     * @param value the value to select.
     */
    select(value: string|number): void;
    _updateAttrForSelected(): void;
    _updateSelected(): void;
    _selectionChange(): void;
    multiChanged(multi: any): void;
    _selectMulti(values: any): void;
    _toggleSelected(value: any): void;
    _valuesToItems(values: any): any;
  }

  const IronMultiSelectableBehavior: object;
}
