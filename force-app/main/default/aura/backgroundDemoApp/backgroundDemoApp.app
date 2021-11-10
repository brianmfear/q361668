<aura:application extends="force:slds">
    <aura:attribute name="background" type="string" />
    <lightning:input label="Background URL" value="{!v.background}" />
    <c:backgroundDemo background="{!v.background}" />
</aura:application>