<section id="contact"
         class="">
    <header>
        <p>Masz pytania?</p>
        <h3>Skontaktuj się z nami</h3>
    </header>
    <article class="clearfix">
        <div class="">
            <div class="contact-info">
                <p>
                    <i class="fa fa-info"></i>
                    SAMM-BUD Sp. z o.o.
                </p>
                <p>
                    <i class="fa fa-phone"></i>
                    <a href="tel:48534197727">+48 534 197 727</a>
                </p>
                <p>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:kontakt@samm-bud.pl">kontakt@samm-bud.pl</a>
                </p>
            </div>
        </div>
        <div class="formularz">
            <div class="contact-form clearfix">
                <form id="contact-form"
                      class="row"
                      action="contact.php"
                      method="post"
                      novalidate="">

                    <fieldset class="relative box-contact col-xs-12 col-md-6">
                        <input id="contact-name"
                               name="contactName"
                               placeholder="Imię i nazwisko"
                               class="form-control requiredField"
                               type="text"
                               data-error-empty="Proszę wpisać imię i nazwisko">
                        <!--<i class="fa fa-user form-control-feedback"></i>-->
                    </fieldset>

                    <fieldset class="relative box-contact col-xs-12 col-md-6">
                        <input id="contact-mail"
                               name="email"
                               placeholder="Twój adres e-mail"
                               class="form-control requiredField"
                               type="email"
                               data-error-empty="Proszę podać adres e-mail"
                               data-error-invalid="Błędny adres e-mail">
                        <!--<i class="fa fa-envelope form-control-feedback"></i>-->
                    </fieldset>

                    <fieldset class="relative box-contact col-xs-12">
                        <textarea id="message"
                                  name="comments"
                                  placeholder="Treść wiadomości"
                                  class="form-control requiredField"
                                  rows="1"
                                  data-error-empty="Proszę wpisać treść wiadomości"></textarea>
                        <!--<i class="fa fa-pencil form-control-feedback"></i>-->
                    </fieldset>
                    <button name="submit"
                            type="submit"
                            class="send btn btn-red"
                            data-error-message="Nie wysłano wiadomości"
                            data-sending-message="Wysyłanie..."
                            data-ok-message="Wiadomość wysłano pomyślnie!">
                        <!--<<i class="fa fa-location-arrow"></i>-->
                        Wyślij wiadomość
                    </button>
                    <!--<input type="hidden" name="submitted" id="submitted" value="true">-->

                </form><!-- End contact-form -->
            </div>
        </div>
        </div>
    </article>
</section>