---
title: Test
sassdocGroupName: test
---


# Test


<div class="sassdoc-intro">
  
This is a group description. It describes the group.
It can be split across multiple lines.
  
</div>
    



## Variables




###  $variable-specific-test <Badge text="variable" type="tip" vertical="top" /><Badge text="{*}" type="warning" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#variable-variable-specific-test} 

  

This is a test variable aiming at testing:
- `@prop`
- `@type`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** variable
- **Lines (comments):** 102-109
- **Lines (code):** 111-111

</SassdocDetails>
    
    

#### Map Properties


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|base.first-key|`String`|"default"|Description|
|base.second-key|`String`|42|Description|

    
  

## Mixins




###  mixin-specific-test() <Badge text="mixin" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#mixin-mixin-specific-test} 

  

This is a test mixin aiming at testing:
- `@content`
- `@param`
- `@output`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 83-96
- **Lines (code):** 98-98

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
    


###  autofill-test() <Badge text="mixin" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#mixin-autofill-test} 

  

This is a test aiming at testing:
- autofilled `@requires`
- autofilled `@error`
- autofilled `@content`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 123-126
- **Lines (code):** 128-139

</SassdocDetails>
    
    

#### Throw

- This is an autofilled error
    

#### Require

- [mixin-specific-test()](/sass/test/#mixin-mixin-specific-test)
- [function-specific-test()](/sass/test/#function-function-specific-test)
- [alias-test()](/sass/test/#function-alias-test)
- [alias-test-aliased()](/sass/test/#function-alias-test-aliased)
- [%placeholder-specific-test](/sass/test/#placeholder-placeholder-specific-test)
- [$variable-specific-test](/sass/test/#variable-variable-specific-test)
  


###  autofill-test-handwritten() <Badge text="mixin" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#mixin-autofill-test-handwritten} 

  

This is a test that autofill can be overwritten.
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 144-146
- **Lines (code):** 148-152

</SassdocDetails>
    
    

#### Require

- [$variable-specific-test](/sass/test/#variable-variable-specific-test)
- [function-specific-test()](/sass/test/#function-function-specific-test)
- [mixin-specific-test()](/sass/test/#mixin-mixin-specific-test)
  


###  autofill-test-not-found() <Badge text="mixin" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#mixin-autofill-test-not-found} 

  

This is a test that autofill should report not found
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 154-155
- **Lines (code):** 156-157

</SassdocDetails>
    
    
  

## Functions




###  function-specific-test() <Badge text="function" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#function-function-specific-test} 

  

This is a test function aiming at testing:
- `@param`
- `@return`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 67-77
- **Lines (code):** 79-79

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
    


###  alias-test() <Badge text="function" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#function-alias-test} 

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 161-164
- **Lines (code):** 166-166

</SassdocDetails>
    
    


###  alias-test-aliased() <Badge text="function" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#function-alias-test-aliased} 

  

This is a test function aiming at testing:
- `@alias`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Aliased:** alias-test
- **Lines (comments):** 168-169
- **Lines (code):** 171-171

</SassdocDetails>
    
    


###  alias-test-should-warn() <Badge text="function" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#function-alias-test-should-warn} 

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 173-176
- **Lines (code):** 178-178

</SassdocDetails>
    
    
  

## Placeholders




###  %placeholder-specific-test <Badge text="placeholder" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#placeholder-placeholder-specific-test} 

  

This is a test placeholder aiming at testing:
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 114-117
- **Lines (code):** 119-119

</SassdocDetails>
    
    

#### Throw

- This is an error.
    


###  %placeholder-[blue,green,red] <Badge text="placeholder" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#placeholder-placeholder-[blue,green,red]} 

  

This is a test placeholder aiming at testing:
- `@name`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 180-182
- **Lines (code):** 184-184

</SassdocDetails>
    
    
  

## Css




###  data-foo <Badge text="css" type="tip" vertical="top" /><Badge text="Private" type="danger" vertical="top" />  {#css-data-foo} 

  

This is a test CSS block.
    
    

``` scss
{
  color: red;
}
```
  


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** css
- **Lines (comments):** 186-187
- **Lines (code):** 189-189

</SassdocDetails>
    
    
  

<script>
const sassdocGroup = [{"groupName":"test","id":"function-function-specific-test","uid":"test-function-function-specific-test","title":"function-specific-test()","groupPath":"/sass/test/","path":"/sass/test/#function-function-specific-test"},{"groupName":"test","id":"mixin-mixin-specific-test","uid":"test-mixin-mixin-specific-test","title":"mixin-specific-test()","groupPath":"/sass/test/","path":"/sass/test/#mixin-mixin-specific-test"},{"groupName":"test","id":"variable-variable-specific-test","uid":"test-variable-variable-specific-test","title":"$variable-specific-test","groupPath":"/sass/test/","path":"/sass/test/#variable-variable-specific-test"},{"groupName":"test","id":"placeholder-placeholder-specific-test","uid":"test-placeholder-placeholder-specific-test","title":"%placeholder-specific-test","groupPath":"/sass/test/","path":"/sass/test/#placeholder-placeholder-specific-test"},{"groupName":"test","id":"mixin-autofill-test","uid":"test-mixin-autofill-test","title":"autofill-test()","groupPath":"/sass/test/","path":"/sass/test/#mixin-autofill-test"},{"groupName":"test","id":"mixin-autofill-test-handwritten","uid":"test-mixin-autofill-test-handwritten","title":"autofill-test-handwritten()","groupPath":"/sass/test/","path":"/sass/test/#mixin-autofill-test-handwritten"},{"groupName":"test","id":"mixin-autofill-test-not-found","uid":"test-mixin-autofill-test-not-found","title":"autofill-test-not-found()","groupPath":"/sass/test/","path":"/sass/test/#mixin-autofill-test-not-found"},{"groupName":"test","id":"function-alias-test","uid":"test-function-alias-test","title":"alias-test()","groupPath":"/sass/test/","path":"/sass/test/#function-alias-test"},{"groupName":"test","id":"function-alias-test-aliased","uid":"test-function-alias-test-aliased","title":"alias-test-aliased()","groupPath":"/sass/test/","path":"/sass/test/#function-alias-test-aliased"},{"groupName":"test","id":"function-alias-test-should-warn","uid":"test-function-alias-test-should-warn","title":"alias-test-should-warn()","groupPath":"/sass/test/","path":"/sass/test/#function-alias-test-should-warn"},{"groupName":"test","id":"placeholder-placeholder-[blue,green,red]","uid":"test-placeholder-placeholder-[blue,green,red]","title":"%placeholder-[blue,green,red]","groupPath":"/sass/test/","path":"/sass/test/#placeholder-placeholder-[blue,green,red]"},{"groupName":"test","id":"css-data-foo","uid":"test-css-data-foo","title":"data-foo","groupPath":"/sass/test/","path":"/sass/test/#css-data-foo"}];
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
  
  