<section id="training" data-padding="10">
    <header>
        <h1 class="title-section">szkolenia</h1>
    </header>
    <article class="clearfix">
        <h3>Oferta szkoleniowa:</h3>

        <?php
        $args = array(
            'post_status' => 'publish',
            'post_type'   => 'szkolenia'
        );
        $query = new WP_Query( $args );
        if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();
                $data = get_fields(get_the_ID());
                $tekst_intro_length = (strlen($data['tekst_intro']) > 3) ? true : false;
                ?>


                <div class="training-box <?php if($tekst_intro_length) echo "text-collapse"; else echo "pb0 " ?>">
                    <p class="attention pl-sm green-square">
                        <?php
                             echo "
                                    <b>{$data['main_title']}</b>
                                    <span>{$data['podtytul']}</span>
                             ";
                        ?>
                    </p>
                    <div class="item-description">
                        <?php
                            if($tekst_intro_length) {
                                echo "<p class='first'>{$data['tekst_intro']}</p>";
                            };
                            echo "<p>{$data['tekst_glowny']}"
                        ?>
                    </div>
                    <?php
                    if($tekst_intro_length) {
                        echo "<span class='read-more'>Czytaj więcej...</span></p>";
                    };
                    ?>
                </div>
            <?php endwhile; else: ?>
            <p>Nie ma tekstu do wyświetlenia</p>
        <?php endif; ?>
    </article>
</section>