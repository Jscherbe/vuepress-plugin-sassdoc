
# Test


<div class="sassdoc-intro">
  
This is a group description. It describes the group.
It can be split across multiple lines.
  
</div>
    



## Variables




###  $variable-specific-test <badge text="variable" type="tip" vertical="top" /><badge text="{*}" type="warn" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#variable-variable-specific-test} 

  

This is a test variable aiming at testing:
- `@prop`
- `@type`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** variable
- **Lines (comments):** 100-107
- **Lines (code):** 109-109

</SassdocDetails>
    
    

#### Map Properties


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|base.first-key|`String`|"default"|Description|
|base.second-key|`String`|42|Description|

    
  

## Mixins




###  mixin-specific-test() <badge text="mixin" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#mixin-mixin-specific-test} 

  

This is a test mixin aiming at testing:
- `@content`
- `@param`
- `@output`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 81-94
- **Lines (code):** 96-96

</SassdocDetails>
    
    

#### Parameters


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|$number|`Number`|42|Number|
|$extra-arguments|`Arglist`||Extra arguments|
|@content|`content block`||Content is parsed and whatever.|

    

#### Mixin Output

Nothing

    

#### Throw

- This is an error.
    


###  autofill-test() <badge text="mixin" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#mixin-autofill-test} 

  

This is a test aiming at testing:
- autofilled `@requires`
- autofilled `@error`
- autofilled `@content`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 121-124
- **Lines (code):** 126-137

</SassdocDetails>
    
    

#### Throw

- This is an autofilled error
    

#### Require

- [mixin-specific-test()](/by-type/test/#mixin-mixin-specific-test)
- [function-specific-test()](/by-type/test/#function-function-specific-test)
- [alias-test()](/by-type/test/#function-alias-test)
- [alias-test-aliased()](/by-type/test/#function-alias-test-aliased)
- [%placeholder-specific-test](/by-type/test/#placeholder-placeholder-specific-test)
- [$variable-specific-test](/by-type/test/#variable-variable-specific-test)
  


###  autofill-test-handwritten() <badge text="mixin" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#mixin-autofill-test-handwritten} 

  

This is a test that autofill can be overwritten.
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 142-144
- **Lines (code):** 146-150

</SassdocDetails>
    
    

#### Require

- [$variable-specific-test](/by-type/test/#variable-variable-specific-test)
- [function-specific-test()](/by-type/test/#function-function-specific-test)
- [mixin-specific-test()](/by-type/test/#mixin-mixin-specific-test)
  


###  autofill-test-not-found() <badge text="mixin" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#mixin-autofill-test-not-found} 

  

This is a test that autofill should report not found
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 152-153
- **Lines (code):** 154-155

</SassdocDetails>
    
    
  

## Functions




###  function-specific-test() <badge text="function" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#function-function-specific-test} 

  

This is a test function aiming at testing:
- `@param`
- `@return`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 65-75
- **Lines (code):** 77-77

</SassdocDetails>
    
    

#### Parameters


|Name|Type|Description|Default|
|:--|:--|:--|:--|
|$arg|`*`|Whatever||
|$extra-arguments|`List`|Extra arguments|()|

    

#### Returns


|Type|Description|
|:--|:--|
|`*`|Anything|

    

#### Throw

- This is an error.
    


###  alias-test() <badge text="function" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#function-alias-test} 

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 159-162
- **Lines (code):** 164-164

</SassdocDetails>
    
    


###  alias-test-aliased() <badge text="function" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#function-alias-test-aliased} 

  

This is a test function aiming at testing:
- `@alias`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** function
- **Aliased:** alias-test
- **Lines (comments):** 166-167
- **Lines (code):** 169-169

</SassdocDetails>
    
    


###  alias-test-should-warn() <badge text="function" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#function-alias-test-should-warn} 

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 171-174
- **Lines (code):** 176-176

</SassdocDetails>
    
    
  

## Placeholders




###  %placeholder-specific-test <badge text="placeholder" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#placeholder-placeholder-specific-test} 

  

This is a test placeholder aiming at testing:
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 112-115
- **Lines (code):** 117-117

</SassdocDetails>
    
    

#### Throw

- This is an error.
    


###  %placeholder-[blue,green,red] <badge text="placeholder" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#placeholder-placeholder-[blue,green,red]} 

  

This is a test placeholder aiming at testing:
- `@name`
    
    

``` scss
{
  color: blue;
}
```
  


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 178-180
- **Lines (code):** 182-184

</SassdocDetails>
    
    
  

## Css




###  data-foo <badge text="css" type="tip" vertical="top" /><badge text="Private" type="error" vertical="top" />  {#css-data-foo} 

  

This is a test CSS block.
    
    

``` scss
{
  color: red;
}
```
  


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc-test.scss
- **Group:** test
- **Type:** css
- **Lines (comments):** 186-187
- **Lines (code):** 189-189

</SassdocDetails>
    
    
  

<script>
const sassdocGroup = [{"groupName":"test","id":"function-function-specific-test","uid":"test-function-function-specific-test","title":"function-specific-test()","groupPath":"/by-type/test/","path":"/by-type/test/#function-function-specific-test"},{"groupName":"test","id":"mixin-mixin-specific-test","uid":"test-mixin-mixin-specific-test","title":"mixin-specific-test()","groupPath":"/by-type/test/","path":"/by-type/test/#mixin-mixin-specific-test"},{"groupName":"test","id":"variable-variable-specific-test","uid":"test-variable-variable-specific-test","title":"$variable-specific-test","groupPath":"/by-type/test/","path":"/by-type/test/#variable-variable-specific-test"},{"groupName":"test","id":"placeholder-placeholder-specific-test","uid":"test-placeholder-placeholder-specific-test","title":"%placeholder-specific-test","groupPath":"/by-type/test/","path":"/by-type/test/#placeholder-placeholder-specific-test"},{"groupName":"test","id":"mixin-autofill-test","uid":"test-mixin-autofill-test","title":"autofill-test()","groupPath":"/by-type/test/","path":"/by-type/test/#mixin-autofill-test"},{"groupName":"test","id":"mixin-autofill-test-handwritten","uid":"test-mixin-autofill-test-handwritten","title":"autofill-test-handwritten()","groupPath":"/by-type/test/","path":"/by-type/test/#mixin-autofill-test-handwritten"},{"groupName":"test","id":"mixin-autofill-test-not-found","uid":"test-mixin-autofill-test-not-found","title":"autofill-test-not-found()","groupPath":"/by-type/test/","path":"/by-type/test/#mixin-autofill-test-not-found"},{"groupName":"test","id":"function-alias-test","uid":"test-function-alias-test","title":"alias-test()","groupPath":"/by-type/test/","path":"/by-type/test/#function-alias-test"},{"groupName":"test","id":"function-alias-test-aliased","uid":"test-function-alias-test-aliased","title":"alias-test-aliased()","groupPath":"/by-type/test/","path":"/by-type/test/#function-alias-test-aliased"},{"groupName":"test","id":"function-alias-test-should-warn","uid":"test-function-alias-test-should-warn","title":"alias-test-should-warn()","groupPath":"/by-type/test/","path":"/by-type/test/#function-alias-test-should-warn"},{"groupName":"test","id":"placeholder-placeholder-[blue,green,red]","uid":"test-placeholder-placeholder-[blue,green,red]","title":"%placeholder-[blue,green,red]","groupPath":"/by-type/test/","path":"/by-type/test/#placeholder-placeholder-[blue,green,red]"},{"groupName":"test","id":"css-data-foo","uid":"test-css-data-foo","title":"data-foo","groupPath":"/by-type/test/","path":"/by-type/test/#css-data-foo"}];
export default {
  sassdocGroup,
  provide: {
    getSassdocItem(uid) {
      return sassdocGroup.find(item => item.uid === uid);
    },
    getSassdocGroup() {
      return sassdocGroup;
    }
  }
}
</script> 
  
  