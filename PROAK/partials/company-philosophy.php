<section id="company-philosophy" data-padding="10">
    <header>
        <h1 class="title-section">filozofia firmy</h1>
    </header>
    <article>
        <?php
        $args = array(
            'post_status' => 'publish',
            'post_type'   => 'filozofia'
        );
        $query = new WP_Query( $args );
        if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();
                $data = get_fields(get_the_ID());
                ?>
                <?php

                    echo "
                        <p>
                            <b>{$data['zielony_wstep']} </b>{$data['wstep_szary']}
                        </p>
                        <div>
                            <h3>{$data['first_header']}</h3>
                            <p>
                                {$data['first_header_text']}
                            </p>
                        </div>
                        <div class='set-ul-green-square'>
                            <h3>{$data['second_header']}</h3>
                            <p>{$data['second_header_text']}</p>

                               {$data['lista']}
                        </div>";

                ?>


            <?php endwhile; else: ?>
            <p>Nie ma tekstu do wyświetlenia</p>
        <?php endif; ?>

    </article>
</section>