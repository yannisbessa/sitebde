<?php

/* BDESiteBundle:Bde:BAccueil.html.twig */
class __TwigTemplate_a3ff0acea6e827f01a051558b0b1b07b20f63e1676b18d99cc1b7cd84f589c0f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("::layoutBackoffice.html.twig", "BDESiteBundle:Bde:BAccueil.html.twig", 3);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::layoutBackoffice.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_78e8736f1af188962391142e91263b602604a5fe7b909f215838d0c6676aac8c = $this->env->getExtension("native_profiler");
        $__internal_78e8736f1af188962391142e91263b602604a5fe7b909f215838d0c6676aac8c->enter($__internal_78e8736f1af188962391142e91263b602604a5fe7b909f215838d0c6676aac8c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "BDESiteBundle:Bde:BAccueil.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_78e8736f1af188962391142e91263b602604a5fe7b909f215838d0c6676aac8c->leave($__internal_78e8736f1af188962391142e91263b602604a5fe7b909f215838d0c6676aac8c_prof);

    }

    // line 6
    public function block_body($context, array $blocks = array())
    {
        $__internal_d03a6056be7e4d6129bf350d57108d5a2d75737022f2459dc5640f996cd14773 = $this->env->getExtension("native_profiler");
        $__internal_d03a6056be7e4d6129bf350d57108d5a2d75737022f2459dc5640f996cd14773->enter($__internal_d03a6056be7e4d6129bf350d57108d5a2d75737022f2459dc5640f996cd14773_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 7
        echo "
  ";
        // line 9
        echo "  <h2>Ajouter un pole</h2>

<form action=\"";
        // line 11
        echo $this->env->getExtension('routing')->getPath("BDE_site_BAccueil");
        echo "\" method=\"post\">
<p> ajouter un pole</p>
";
        // line 13
        echo $this->env->getExtension('form')->renderer->searchAndRenderBlock((isset($context["form"]) ? $context["form"] : $this->getContext($context, "form")), 'widget');
        echo "
<input type=\"submit\">

</form>


";
        
        $__internal_d03a6056be7e4d6129bf350d57108d5a2d75737022f2459dc5640f996cd14773->leave($__internal_d03a6056be7e4d6129bf350d57108d5a2d75737022f2459dc5640f996cd14773_prof);

    }

    public function getTemplateName()
    {
        return "BDESiteBundle:Bde:BAccueil.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 13,  47 => 11,  43 => 9,  40 => 7,  34 => 6,  11 => 3,);
    }
}
/* {# src/BDE/SiteBundle/Resources/views/layout.html.twig #}*/
/* */
/* {% extends "::layoutBackoffice.html.twig" %}*/
/* */
/* */
/* {% block body %}*/
/* */
/*   {# On définit un sous-titre commun à toutes les pages du bundle, par exemple #}*/
/*   <h2>Ajouter un pole</h2>*/
/* */
/* <form action="{{path("BDE_site_BAccueil")}}" method="post">*/
/* <p> ajouter un pole</p>*/
/* {{form_widget(form)}}*/
/* <input type="submit">*/
/* */
/* </form>*/
/* */
/* */
/* {% endblock %}*/
