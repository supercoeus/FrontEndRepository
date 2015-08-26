##基本参数说明

### `tags-input`
	<tags-input
	  ng-model="{string}"
	  [template="{string}"]
	  [display-property="{string}"]
	  [key-property="{string}"]
	  [type="{string}"]
	  [text="{string}"]
	  [tabindex="{number}"]
	  [placeholder="{string}"]
	  [min-length="{number}"]
	  [max-length="{number}"]
	  [min-tags="{number}"]
	  [max-tags="{number}"]
	  [allow-leftover-text="{boolean}"]
	  [remove-tag-symbol="{string}"]
	  [add-on-enter="{boolean}"]
	  [add-on-space="{boolean}"]
	  [add-on-comma="{boolean}"]
	  [add-on-blur="{boolean}"]
	  [add-on-paste="{boolean}"]
	  [paste-split-pattern="{string}"]
	  [replace-spaces-with-dashes="{boolean}"]
	  [allowed-tags-pattern="{string}"]
	  [enable-editing-last-tag="{boolean}"]
	  [add-from-autocomplete-only="{boolean}"]
	  [spellcheck="{boolean}"]
	  [on-tag-adding="{expression}"]
	  [on-tag-added="{expression}"]
	  [on-invalid-tag="{expression}"]
	  [on-tag-removing="{expression}"]
	  [on-tag-removed="{expression}"]
	  [on-tag-clicked="{expression}"]>
	</tags-input>

#### 重要参数说明

* `min-length`   输入内容的最小合法长度,小于这个值则不能作为标签。
* `max-length`   输入内容的最大合法长度,大于这个值则不能作为标签。
* `min-tags`     输入框里面最少标签数,小于则验证非法。
* `max-tags`     输入框里面最大标签数大于则验证非法。
* `allow-leftover-text` 是否允许未完成的标签存在（true允许，false不允许），允许则输框进行验证的时候不验证未完成的标签。
* `remove-tag-symbol` 删除按钮的符号，默认为 ×
* `enable-editing-last-tag` 最后一个标签是否可以编辑，默认false。如果为true，则按退格键的时不会直接删除最后一个标签，而是编辑最后一个标签
* `add-from-autocomplete-only` 是否只从指定的标签库添加标签，默认为false,设置为true用鼠标点击列表不能添加到输入框。


### `auto-complete` 给 `tags-input` 添加自动填充功能
	<auto-complete
	  source="{expression}"
	  [template="{string}"]
	  [display-property="{string}"]
	  [debounce-delay="{number}"]
	  [min-length="{number}"]
	  [highlight-matched-text="{boolean}"]
	  [max-results-to-show="{number}"]
	  [load-on-down-arrow="{boolean}"]
	  [load-on-empty="{boolean}"]
	  [load-on-focus="{boolean}"]
	  [select-first-match="{boolean}"]>
	</auto-complete>
* `source ` 当属如框的内容改变的时候调用的函数，当前输入的标签($query)，可以用来查找符合条件的值。
* `debounce-delay` 鼠标停止输入多长时间，显示提示的标签
* `min-length` 显示提示的最短长度
* `highlight-matched-text` 高亮适配的text
* `max-results-to-show` 展示结果的最长长度
* `select-first-match` 是否选中提示列表的第一个元素
