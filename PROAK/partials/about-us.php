<section id="about-us" data-padding="10">
    <header>
        <h1 class="title-section">o mnie</h1>
    </header>
    <article>
        <div>
            <?php
            $args = array(
                'post_status' => 'publish',
                'post_type'   => 'omnie'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) : $query->the_post();
                    $data = get_fields(get_the_ID());
                    ?>
                    <?php

                    echo "
                        <p>
                            <b>{$data['wstep_zielony']} </b>{$data['wstep_szary']}
                        </p>
                        <p>
                            {$data['zwykly_tekst']}
                        </p>
                        ";
                    ?>


                <?php endwhile; else: ?>
                <p>Nie ma tekstu do wyświetlenia</p>
            <?php endif; ?>
            </div>
    </article>
</section>